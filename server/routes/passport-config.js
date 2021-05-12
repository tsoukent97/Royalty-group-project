const LocalStrategy = require('passport-local').Strategy
const customers = require('../db/db')

function initialize (passport) {
  passport.use(new LocalStrategy(async (username, password, done) => {
    customers.getCustomerByUsername(username)
      .then(customer => {
        if (!customer) return done(null, false, { message: 'Invalid Username' })
        return done(null,customer)
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
