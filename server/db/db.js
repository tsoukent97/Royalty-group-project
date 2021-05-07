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

const getCustomerById = (id, db = connection) => {
  return db('customers').where('id', id).select().first()
}

// this might end up here twice because I stole it from Nicole's branch
function addCustomer (name, userName, db = connection) {
  return db('customers').insert(
    {
      name: name,
      user_name: userName
    })
}

module.exports = {
  getCustomers,
  customerExists,
  getCustomerById,
  addCustomer
}
