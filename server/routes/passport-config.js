const LocalStrategy = require('passport-local').Strategy
const db = require('../db/db')
const bcrypt = require('bcryptjs')

function initialize (passport) {
  passport.use(new LocalStrategy(async (username, password, business, done) => {
    db.getCustomerByUsername(username)
    .then(customer => {
    if (!customer) {
      db.getBusinessByName(business)
      .then(business => {
        if (!business) return done(null, false, { message: 'Invalid Business' })
        bcrypt.compare(password, business.password, (e, result) => {
          if (e) throw e
          if (result === true) {
            return done(null, business)
          } else {
            return done(null, false, { message: 'Invalid Password' })
          }
        })
        return null
      })
    }})
    db.getCustomerByUsername(username)
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

  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => {
    return done(null, db.getCustomerById(id))
  })
}

module.exports = initialize
