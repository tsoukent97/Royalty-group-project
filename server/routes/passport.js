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
// function checkAuthenticated (req, res, next) {
//   if (req.isAuthenticated()) {
//     return next()
//   }
//   res.redirect('/login')
// }

router.post('/login', async (req, res, next) => {
  await passport.authenticate('local', (e, customer, info) => {
    console.log('34' + customer, e, info)
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

router.post('/register', (req, res) => {
  const newCustomer = req.body
  customers.customerExists(newCustomer.username)
    .then(user => {
      if (!user) {
        // eslint-disable-next-line promise/no-nesting
        customers.addCustomer(newCustomer)
          .then(() => {
            res.json('Username created')
            return null
          })
          .catch(e => {
            console.log(e.message)
            return null
          })
        return null
      } else {
        res.json('Username already taken.')
        return null
      }
    })
    .catch(err => {
      console.log(err.message)
      return null
    })
})

module.exports = router
