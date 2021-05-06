// const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile').development
const connection = require('knex')(config)

function getCustomers (db = connection) {
  return db('customers').select()
}

const customerExists = (username, db = connection) => {
  return db('customers')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

module.exports = {
  getCustomers,
  customerExists
}
