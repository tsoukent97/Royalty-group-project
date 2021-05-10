const LocalStrategy = require('passport-local').Strategy
const customers = require('../db/db')
const bcrypt = require('bcryptjs')

function initialize (passport) {
  passport.use(new LocalStrategy(async (username, password, done) => {
    customers.getCustomerByUsername(username)
      .then(customer => {
        if (!customer) return done(null, false, { message: 'Invalid Username' })
        bcrypt.compare(password, customer.password, (e, result) => {
          if (e) throw e
          if (result === true) {
            return done(null,customer)
          } else {
            return done(null, false, { message: 'Invalid Password' })
          }
        })
        return null
      })
      .catch(e => {
        console.log(e.message)
        return null
      })
  }))

  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => {
    return done(null, customers.getCustomerById(id))
  })
}

module.exports = initialize
