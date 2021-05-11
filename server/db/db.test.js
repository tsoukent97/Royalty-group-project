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
// addBusiness,
// addCard,
// getCustomerByUsername,
// getStampCount,
// updateStampCount,
// resetStampCount,
// cardExists

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

// test('card exists', () => {
//   const customerId = 901
//   const businessId = 105
//   return db.cardExists(businessId, customerId, testDb)
//     .then(result => {
//       expect(result).toEqual()
//       return null
//     })
// })

// test('addBusiness', () => {
//   return db.addBusiness('name', 'address', 'phone_number', 'email', testDb)
// })

test('get all cards', () => {
  return db.getAllCards(testDb)
    .then((businesses) => {
      expect(businesses).toHaveLength(15)
      return null
    })
})

test('gets all customers', () => {
  return db.getCustomers(testDb)
    .then((customers) => {
      expect(customers).toHaveLength(5)
      return null
    })
})
