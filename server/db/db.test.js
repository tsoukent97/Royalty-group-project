const testEnv = require('../test-environment')
const db = require('./db')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

// getCustomers,
// customerExists,
// getCustomerById,
// getBusinessProfile,
// getCustomerCards,
// addCustomer,
// addCard,
// getCustomerByUsername,
// getStampCount,
// updateStampCount,
// resetStampCount,

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

test('card exists', () => {
  const customerId = 901
  const businessId = 105
  return db.cardExists(businessId, customerId, testDb)
    .then(result => {
      expect(result).toHaveLength(1)
      return null
    })
})

test('customer exists', () => {
  const username = 'Knet'
  return db.customerExists(username, testDb)
    .then(result => {
      expect(result).toEqual(false)
      return null
    })
})

test('addBusiness', () => {
  const business = 'Bunnings'
  const address = '2 Fun Lane'
  const phoneNumber = '123'
  const email = 'example@example.com'
  return db.addBusiness(business, address, phoneNumber, email, testDb)
    .then(result => {
      expect(result).toEqual([116])
      return null
    })
})

test('get all cards', () => {
  return db.getAllCards(testDb)
    .then((businesses) => {
      expect(businesses).toHaveLength(15)
      return null
    })
})

test('gets all customers', () => {
  return db.getCustomers(testDb)
    .then(id => {
      expect(id).toHaveLength(5)
      return null
    })
})

test('addCustomer', () => {
  const customer = 'Billy'
  return db.addCustomer(customer, testDb)
    .then(result => {
      expect(result).toBe(6)
      return null
    })
})
