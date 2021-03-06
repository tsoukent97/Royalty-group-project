const testEnv = require('../test-environment')
const db = require('./db')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

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
  const username = 'Bob'
  return db.customerExists(username, testDb)
    .then(result => {
      expect(result).toEqual(false)
      return null
    })
})

test('add card', () => {
  const businessId = '107'
  const customerId = '903'
  return db.addCard(businessId, customerId, testDb)
    .then(result => {
      expect(result).toEqual([26])
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
  const businessId = 115
  return db.getCustomers(businessId, testDb)
    .then((id) => {
      expect(id).toHaveLength(5)
      return null
    })
})

test('gets business profile', () => {
  const businessId = 110
  const riversideCafe = {
    id: 110,
    business: 'Riverside Cafe',
    address: '2 Fun Lane',
    phoneNumber: 123,
    email: 'example@example.com',
    logo: './images/riverside-cafe.jpg'
  }
  return db.getBusinessProfile(businessId, testDb)
    .then(result => {
      expect(result).toEqual(riversideCafe)
      return null
    })
})

test('get customer by id', () => {
  const customerId = 905
  const sam = {
    id: 905,
    username: 'Sam',
    userType: 'customer',
    password: ''
  }
  return db.getCustomerById(customerId, testDb)
    .then(result => {
      expect(result).toEqual(sam)
      return null
    })
})

test('update stamp count', () => {
  const businessId = 115
  const customerId = 905
  const stampCount = 5
  return db.updateStampCount(businessId, customerId, stampCount, testDb)
    .then(() => {
      return db.getStampCount(businessId, customerId, testDb)
    })
    .then(result => {
      expect(result).toEqual([{ stamp_count: 6 }])
      return null
    })
})

test('reset stamp count', () => {
  const businessId = 102
  const customerId = 902
  return db.resetStampCount(businessId, customerId, testDb)
    .then(() => {
      return db.getStampCount(businessId, customerId, testDb)
    })
    .then(result => {
      expect(result).toEqual([{ stamp_count: 0 }])
      return null
    })
})

test('get stamp count', () => {
  const businessId = 102
  const customerId = 902
  return db.getStampCount(businessId, customerId, testDb)
    .then(result => {
      expect(result).toEqual([{ stamp_count: 9 }])
      return null
    })
})

test('get customer by username', () => {
  const username = 'Kent'
  const kent = {
    id: 902,
    username: 'Kent',
    userType: 'customer',
    password: ''
  }
  return db.getCustomerByUsername(username, testDb)
    .then(result => {
      expect(result).toEqual(kent)
      return null
    })
})
