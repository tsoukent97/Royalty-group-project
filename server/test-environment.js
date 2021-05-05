const knex = require('knex')

const config = require('./db/knexfile').test

module.exports = {
  getTestDb: () => knex(config),

  initialise: db => db.migrate.latest()
    .then(() => db.seed.run()),

  cleanup: db => db.destroy()
}
