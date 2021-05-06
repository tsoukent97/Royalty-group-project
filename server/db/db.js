// const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile').development
const connection = require('knex')(config)

module.exports = {
  getCustomers,
  getOneCustomer,
  getUserCards,
  getSignedUp
}

// Need to make these functions
// adding new cards, customers, bus
// deleting customer, cards, bus

function getCustomers (db = connection) {
  return db('customers').select()
}

function getOneCustomer (id, db = connection) {
  return db('customers').where('id', id).first()
}

function getUserCards (id, db = connection) {
  return db('customers')
    .join('cards', 'cards.customer_id', 'customers.id')
    .where('customers.id', id)
    .select('cards.businesses_id')
}

function getSignedUp (id, db = connection) {
  return db('businesses')
    .join('cards', 'cards.businesses_id', 'businesses.id')
    .where('businesses.id', id)
    .select('cards.customer_id')
}
