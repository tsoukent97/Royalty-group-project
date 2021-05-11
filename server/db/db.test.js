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

test('deletes a card', () => {
  const businessId = 105
  const customerId = 901
  return db.deleteCard(businessId, customerId, testDb)
    .then(result => {
      expect(result).toEqual(1)
      return null
    })
})

test('deletes a customer', () => {
  const id = 901
  return db.deleteCustomer(id, testDb)
    .then(result => {
      expect(result).toEqual(1)
      return null
    })
})

test('deletes a business', () => {
  const id = 105
  return db.deleteBusiness(id, testDb)
    .then(result => {
      expect(result).toEqual(1)
      return null
    })
})
