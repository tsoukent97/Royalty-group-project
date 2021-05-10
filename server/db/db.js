// const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile').development
const connection = require('knex')(config)
const bcrypt = require('bcryptjs')
const saltRounds = 10

module.exports = {
  getCustomers,
  customerExists,
  getCustomerById,
  getBusinessProfile,
  getCustomerCards,
  addCustomer,
  addBusiness,
  addCard,
  deleteCustomer,
  deleteBusiness,
  deleteCard,
  getCustomerByUsername,
  getAllCards,
  getStampCount,
  updateStampCount
}

/*
 * these comments will age as other parts of the code change
 * e.g. if someone changes a migration all of these comments will be out of date and they will have to do a ton of work to make them correct, which probably won't happen
 * much better to document this sort of thing in one spot (i.e. README.md)
 * same with the links to routes, if someone changes a route they have to remember to come here to change the db function
 * the other place for this documentation to live is in your tests - if someone wants to see what the code returns they can look at your test data
 */

// I'd suggest deleting all these comments and finding a permanent home for that documentation

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
    .select('id', 'name', 'address', 'phoneNumber', 'email')
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
    .select('businesses.business as business')
}

// returns customer profile, instead of ID. nested getCustomerProfile function in router
function addCustomer (customer, db = connection) {
  console.log(customer) // remove all console logs when you've finished debugging
  bcrypt.hash(customer.password, saltRounds)
    .then(auth => {
      customer.password = auth
      // instead of avoiding the nesting just move line 76 down one line
      // eslint-disable-next-line promise/no-nesting
      return db('customers')
        .insert(customer)
        .then((id) => getCustomerById(id[0]))
    })
    .catch(e =>
      console.log(e.message))
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

function customerExists (username, db = connection) {
  return db('customers')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
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

// what happens to all of a customers cards when they are deleted?
// should they be left in the db (like currently) or removed as well?
function deleteCustomer (id, db = connection) {
  return db('customers')
    .delete()
    .where('id', id)
}

// what happens to all of a businesses cards when they are deleted?
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

// return an object of customer details. {"id":901,"name":"Aaron","user_type":"customer","hash":null}
// route is http://localhost:3000/customer/:id

function getCustomerById (id, db = connection) {
  return db('customers').where('id', id).select().first()
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

//perhaps this should be called incrementStampCount instead?
function updateStampCount (businessId, customerId, stampCount, db = connection) {
  return db('cards')
    .where('customer_id', customerId)
    .where('business_id', businessId)
    .update({ stamp_count: stampCount + 1 })
}
