// const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile').development
const connection = require('knex')(config)

module.exports = {
  getCustomers,
  getOneCustomer
}

// Need to make these functions
// getting all cards for one customer
// getting all users for one bus for admin user only
// adding new cards, customers, bus
// deleting customer, cards, bus

function getCustomers (db = connection) {
  return db('customers').select()
}

function getOneCustomer (id, db = connection) {
  return db('customers').where('id', id).first()
}
