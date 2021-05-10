// const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile').development
const connection = require('knex')(config)

module.exports = {
  getCustomers,
  getCustomerProfile,
  getBusinessProfile,
  getCustomerCards,
  addCustomer,
  addBusiness,
  addCard,
  deleteCustomer,
  deleteBusiness,
  deleteCard,
  getAllCards,
  getStampCount,
  updateStampCount
}

// returns an array of objects of customer_id signed up under the business. EX:
// [{"customer_id":901},{"customer_id":902},{"customer_id":903},{"customer_id":904},{"customer_id":905}]
// for {name: "Gong Cha", business_id: 102}
// route is http://localhost:3000/business/:id/customers
function getCustomers (id, db = connection) {
  return db('cards').select('customer_id', 'stamp_count')
    .where('business_id', id)
}
// return an object of customer details. EX: {id: 901, name:"Aaron"}
// route is http://localhost:3000/customer/:id
function getCustomerProfile (id, db = connection) {
  return db('customers')
    .select('id', 'name')
    .where('id', id)
    .first()
}
// returns an object of business details EX:
// {"id":102,"name":"Gong_Cha","address":"2 Fun Lane","phone_number":800838383,"email":"example@example.com"}
// route is http://localhost:3000/business/:id
function getBusinessProfile (id, db = connection) {
  return db('businesses')
    .select('id', 'name', 'address', 'phone_number', 'email')
    .where('id', id)
    .first()
}

// returns an array of objects with the business name under a customer's profile EX:
// [{"name":"Robert_Harris"},{"name":"Kent_Two"},{"name":"Milk_&_Honey_Cafe"},{"name":"Gong_Cha"},{"name":"Sam_Three"}]
// for customer {id : 901, name:"Aaron"}
// route is http://localhost:3000/customer/:id/cards
function getCustomerCards (id, db = connection) {
  return db('customers')
    .join('cards', 'cards.customer_id', 'customers.id')
    .join('businesses', 'cards.business_id', 'businesses.id')
    .where('customers.id', id)
    .select('businesses.name as name')
}

// returns customer profile, instead of ID. nested getCustomerProfile function in router
function addCustomer (name, userName, db = connection) {
  return db('customers').insert(
    {
      name: name,
      user_name: userName
    })
}

// returns business profile, instead of ID. nested getCustomerProfile function in router
function addBusiness (name, address, phoneNumber, email, db = connection) {
  return db('businesses').insert(
    {
      name: name,
      address: address,
      phone_number: phoneNumber,
      email: email
    })
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
    .delete()
    .where('id', id)
}

function deleteBusiness (id, db = connection) {
  return db('businesses')
    .delete()
    .where('id', id)
}

function deleteCard (businessId, customerId, db = connection) {
  return db('cards')
    .delete()
    .where('customer_id', customerId)
    .where('business_id', businessId)
}
function getAllCards (db = connection) {
  return db('businesses').select('name')
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