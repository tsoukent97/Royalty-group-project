// const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile').development
const connection = require('knex')(config)
const bcrypt = require('bcryptjs')
const saltRounds = 10

// getCustomerCards,
// getCustomerByUsername,

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

// returns an array of objects of customer_id signed up under the business. EX:
// [{"customer_id":901},{"customer_id":902},{"customer_id":903},{"customer_id":904},{"customer_id":905}]
// for {name: "Gong Cha", business_id: 102}
// route is http://localhost:3000/business/:id/customers
function getCustomers (id, db = connection) {
  return db('cards').select('customer_id', 'stamp_count')
    .where('business_id', id)
}

// returns an object of business details EX:
// {"id":102,"name":"Gong_Cha","address":"2 Fun Lane","phone_number":800838383,"email":"example@example.com"}
// route is http://localhost:3000/business/:id
function getBusinessProfile (id, db = connection) {
  return db('businesses')
    .select('id', 'business', 'address', 'phoneNumber', 'email', 'logo')
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
    .select('businesses.business as business', 'businesses.id as id', 'businesses.logo as logo')
}

// returns customer profile, instead of ID. nested getCustomerProfile function in router
function addCustomer (customer, db = connection) {
  console.log(customer)
  bcrypt.hash(customer.password, saltRounds)
    .then(auth => {
      customer.password = auth
      // eslint-disable-next-line promise/no-nesting
      return db('customers')
        .insert(customer)
        // .then((id) => getCustomerById(id[0]))
    })
    .catch(e =>
      console.log(e.message))
}

// returns business profile, instead of ID. nested getCustomerProfile function in router
function addBusiness (business, db = connection) {
  console.log(business)
  bcrypt.hash(business.password, saltRounds)
    .then(auth => {
      business.password = auth
      return db('businesses')
        .insert(business)
    })
    .catch(e =>
      console.log(e.message))
    // {
    //   business: business,
    //   password: password,
    //   address: address,
    //   phone_number: phoneNumber,
    //   email: email
    // }
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

// return an object of customer details. {"id":901,"name":"Aaron","user_type":"customer","hash":null}
// route is http://localhost:3000/customer/:id

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
