if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const initializePassport = require('./passport-config')
const passport = require('passport')
const express = require('express')
const router = express.Router()
const flash = require('express-flash')
const session = require('express-session')
const customers = require('../db/db')

initializePassport(passport)

router.use(flash())
router.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
router.use(passport.initialize())
router.use(passport.session())

// can call before functions to check user is authenticated and redirects to login if not
function checkAuthenticated (req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  return res.redirect('/')
}

// function checkNotAuthenticated (req, res, next) {
//   if (req.isAuthenticated()) {
//     console.log('test')
//     // res.json('Account already logged in')
//     // return res.redirect('/')
//   }
//   next()
// }

router.post('/login', async (req, res, next) => {
  await passport.authenticate('local', (e, customer, info) => {
    if (e) throw e
    if (!customer) res.json(info.message)
    else {
      req.logIn(customer, e => {
        if (e) throw e
        res.json('Login Succeeded')
      })
    }
  })(req, res, next)
})

router.post('/logout', (req, res) => {
  req.logout()
  res.json('Logged out successfully')
})

router.post('/register', (req, res) => {
  const newCustomer = req.body
  if (newCustomer.username && newCustomer.password) {
    customers.customerExists(newCustomer.username)
      .then(user => {
        if (!user) {
        // eslint-disable-next-line promise/no-nesting
          customers.addCustomer(newCustomer)
          // .then((result) => {
          //   res.json('Username created')
          //   console.log(result, 'line54')
          //   return null
          // })
          // .catch(e => {
          //   res.json(e.message)
          //   console.log(e.message)
          //   return null
          // })
          return res.json('User created')
        } else {
          res.json('Username already taken.')
          return null
        }
      })
      .catch(err => {
        console.log(err.message)
        return null
      })
  } else {
    return res.json('Username and password required')
  }
})

// idk lmao don't look at this
// router.post('/Customerhome', checkAuthenticated, async (req, res) => {
//   await passport.authenticate('local', (e, customer, info) => {
//     if (e) throw e
//     if (!customer) res.json(info.message)
//     else {
//       res.json('User is logged in accessing customer home')
//     }
//   })
// })

module.exports = router
