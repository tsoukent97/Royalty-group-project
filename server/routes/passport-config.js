const LocalStrategy = require('passport-local').Strategy
const customers = require('../db/db')
const businesses = require('../db/db')
const bcrypt = require('bcryptjs')

function initialize (passport) {
  passport.use('user', new LocalStrategy(async (username, password, done) => {
    customers.getCustomerByUsername(username)
      .then(customer => {
        if (!customer) return done(null, false, { message: 'Invalid Username' })
        bcrypt.compare(password, customer.password, (e, result) => {
          if (e) throw e
          if (result === true) {
            return done(null, customer)
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

  passport.use('business', new LocalStrategy(async (business, password, done) => {
    businesses.getBusinessByName(business)
      .then(business => {
        if (!business) return done(null, false, { message: 'Invalid Username' })
        bcrypt.compare(password, business.password, (e, result) => {
          if (e) throw e
          if (result === true) {
            return done(null,business)
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
