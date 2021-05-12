const config = require('./knexfile').development
const connection = require('knex')(config)
const bcrypt = require('bcryptjs')
const saltRounds = 10

module.exports = {
  deleteCard,
  deleteCustomer,
  deleteBusiness,
  cardExists,
  customerExists,
  addBusiness,
  addCard,
  getAllCards,
  getCustomers,
  getCustomerById,
  getBusinessProfile,
  getCustomerCards,
  addCustomer,
  getCustomerByUsername,
  getStampCount,
  updateStampCount,
  resetStampCount,
  businessExists,
  getBusinessByName,
  getBusinessById
}

function getCustomers (id, db = connection) {
  return db('cards').select('customer_id', 'stamp_count')
    .where('business_id', id)
}

function getBusinessProfile (id, db = connection) {
  return db('businesses')
    .select('id', 'business', 'address', 'phoneNumber', 'email', 'logo')
    .where('id', id)
    .first()
}

function getCustomerCards (id, db = connection) {
  return db('customers')
    .join('cards', 'cards.customer_id', 'customers.id')
    .join('businesses', 'cards.business_id', 'businesses.id')
    .where('customers.id', id)
    .select('businesses.business as business', 'businesses.id as id', 'businesses.logo as logo')
}

function addCustomer (customer, db = connection) {
  bcrypt.hash(customer.password, saltRounds)
    .then(auth => {
      customer.password = auth
      return db('customers')
        .insert(customer)
    })
    .catch(e =>
      console.log(e.message))
}

function addBusiness (business, db = connection) {
  bcrypt.hash(business.password, saltRounds)
    .then(auth => {
      business.password = auth
      return db('businesses')
        .insert(business)
    })
    .catch(e =>
      console.log(e.message))
}

function businessExists (business, db = connection) {
  return db('businesses')
    .count('id as n')
    .where('business', business)
    .then(count => {
      return count[0].n > 0
    })
}

function customerExists (username, db = connection) {
  return db('customers')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function cardExists (businessId, customerId, db = connection) {
  return db('cards')
    .select()
    .where('customer_id', customerId)
    .where('business_id', businessId)
}

function addCard (businessId, customerId, db = connection) {
  return db('cards').insert(
    {
      business_id: businessId,
      customer_id: customerId,
      stamp_count: 0
    })
}

function deleteCustomer (id, db = connection) {
  return db('customers')
    .del()
    .where('id', id)
}

function deleteBusiness (id, db = connection) {
  return db('businesses')
    .delete()
    .where('id', id)
}

function deleteCard (businessId, customerId, db = connection) {
  return db('cards')
    .del()
    .where('customer_id', customerId)
    .where('business_id', businessId)
}

function getCustomerById (id, db = connection) {
  return db('customers').where('id', id).select().first()
}

function getBusinessById (id, db = connection) {
  return db('businesses').where('id', id).select().first()
}

function getCustomerByUsername (username, db = connection) {
  return db('customers').where('username', username).select().first()
}

function getAllCards (db = connection) {
  return db('businesses').select('business', 'logo', 'id')
}

function getStampCount (businessId, customerId, db = connection) {
  return db('cards')
    .where('customer_id', customerId)
    .where('business_id', businessId)
    .select('stamp_count')
}

function updateStampCount (businessId, customerId, stampCount, db = connection) {
  return db('cards')
    .where('customer_id', customerId)
    .where('business_id', businessId)
    .update({ stamp_count: stampCount + 1 })
}

function resetStampCount (businessId, customerId, db = connection) {
  return db('cards')
    .where('customer_id', customerId)
    .where('business_id', businessId)
    .update({ stamp_count: 0 })
}

function getBusinessByName (business, db = connection) {
  return db('businesses').where('business', business).select().first()
}
