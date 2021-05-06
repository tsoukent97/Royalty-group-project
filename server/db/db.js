// const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile').development
const connection = require('knex')(config)

module.exports = {
  getCustomers,
  getOneCustomer,
  getUserCards,
  getSignedUp,
  addCustomer,
  addBusiness,
  addCard,
  deleteCustomer,
  deleteBusiness,
  deleteCard
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

function addCustomer (customers, db = connection) {
  return db('customers').insert(customers)
}

function addBusiness (businesses, db = connection) {
  return db('businesses').insert(businesses)
}

function addCard (cards, db = connection) {
  return db('cards').insert(cards)
}

function deleteCustomer (id, customer, db = connection) {
  return db('customers').delete().where('id', id)
}

function deleteBusiness (id, business, db = connection) {
  return db('businesses').delete().where('id', id)
}

function deleteCard (business_id, customer_id, db = connection)
  return db('cards')
  .delete()
  .where('customer_id', customer_id == 'business_id', business_id)