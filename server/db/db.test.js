const testEnv = require('../test-environment')
const db = require('./db')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

// Need to make these tests - yes you do, try running `npm run test -- --coverage` to see how much of the file is currently tested
// getting all cards for one customer
// getting all users for one bus for admin user only
// adding new cards, customers, bus
// deleting customer, cards, bus
//
// good start, don't forget to test for what happens when you pass in dodgy / incomplete arguments (i.e. a customerId that doesn't exist)

test('deletes a card', () => {
  const businessId = 105
  const customerId = 901
  return db.deleteCard(businessId, customerId, testDb)
    .then(result => {
      expect(result).toEqual(1)
      return null
    })
})

test('get a customer profile', () => {
  const testId = 901
  expect.assertions(1)
  return db.getCustomerProfile(testId, testDb)
    .then(result => {
      expect(result).toEqual({ id: 901, name: 'Aaron' })
      return null
    })
})

// what should the code do if the profile isn't found?
test('get a business profile', () => {
  const testId = 101
  expect.assertions(1)
  return db.getBusinessProfile(testId, testDb)
    .then(result => {
      expect(result).toEqual({ id: 101, name: 'Starbucks', address: '2 Fun Lane', phone_number: 123, email: 'example@example.com' })
      return null
    })
})

test('add a new customer', () => {
  const testName = 'bob'
  const testUserName = 'bobby123'
  expect.assertions(1)
  return db.addCustomer(testName, testUserName, testDb)
    .then(result => {
      expect(result).toEqual([906])
      return null
    })
})
