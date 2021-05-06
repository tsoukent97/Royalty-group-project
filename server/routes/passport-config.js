const LocalStrategy = require('passport-local').Strategy

function initialize (passport) {
  passport.use(new LocalStrategy((username, password, done) => {
    const user = getUserByName(username)
    if (user == null)
  }))
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => {
    return done(null, users.getUserById(id))
  })
}
