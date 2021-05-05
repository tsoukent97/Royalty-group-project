// const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile').development
const connection = require('knex')(config)

module.exports = {
  getCustomers
}

function getCustomers (db = connection) {
  return db('customers').select()
}
