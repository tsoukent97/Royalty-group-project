const knex = require('knex')

const config = require('./db/knexfile').test

module.exports = {
  getTestDb: () => knex(config),

  initialise: (db) => {
    return db.migrate.latest()
      .then(() => {
        return db.seed.run()
      })
  },

  cleanup: (db) => {
    return db.destroy()
  }
}
