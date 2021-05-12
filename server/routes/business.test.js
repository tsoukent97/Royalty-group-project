const request = require('supertest')
const db = require('../db/db')
const server = require('../server')

jest.mock('../db/db', () => {
  return {
    getBusinessProfile: jest.fn(),
    getCustomers: jest.fn(),
    deleteBusiness: jest.fn()
  }
})

test('get business profile', () => {
  db.getBusinessProfile.mockImplementation(() => {
    return Promise.resolve([
      { id: 2, business: 'business2', userType: 'business', password: 'password', address: 'address2', phoneNumber: 1234, email: 'test2@test.com' }
    ])
  })
  return request(server)
    .get('/business/1')
    .then((res) => {
      expect(res.body).toHaveLength(1)
      return null
    })
})

test('get all customers of a business', () => {
  db.getCustomers.mockImplementation(() => {
    return Promise.resolve([
      { business_id: 1, customer_id: 1, stamp_count: 1},
      { business_id: 1, customer_id: 2, stamp_count: 2}
    ])
  })
  return request(server)
    .get('/business/1/customers')
    .then((res) => {
      expect(res.body).toHaveLength(2)
      return null
    })
<<<<<<< HEAD
})
=======
})
>>>>>>> 81341a1bf5e4e7c7c50c9cbb0ffaeed9409492e6
