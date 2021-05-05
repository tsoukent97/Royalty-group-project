const testEnv = require('../test-environment')
const db = require('./db')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

// Need to make these tests
// getting all cards for one customer
// getting all users for one bus for admin user only
// adding new cards, customers, bus
// deleting customer, cards, bus

test('getCustomers gets all customers', () => {
  const expected = 5
  return db.getCustomers(testDb)
    .then(customers => {
      const actual = customers.length
      return expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('getOneCustomer gets one customer', () => {
  const expected = 'Aaron'
  return db.getOneCustomer(901, testDb)
    .then(customer => {
      const actual = customer.name
      return expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})
