const LocalStrategy = require('passport-local').Strategy
const customers = require('../db/db')
const bcrypt = require('bcryptjs')

function initialize (passport) {
  passport.use(new LocalStrategy(async (username, password, done) => {
    const customer = customers.customerExists(username)
    if (customer == null) {
      return done(null, false, { message: 'Username not found, please try again.' })
    }

    try {
      if (await bcrypt.compare(password, customer.password)) {
        return done(null, customer)
      } else {
        return done(null, false, { message: 'Incorrect password.' })
      }
    } catch (e) { return done(e) }
  }))

  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => {
    return done(null, customers.getCustomerById(id))
  })
}

module.exports = initialize
