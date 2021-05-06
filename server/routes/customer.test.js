const request = require('supertest')
const db = require('../db/db')
const server = require('../server')

jest.mock('../db/db', () => {
  return {
    getCustomerProfile: jest.fn(),
    getCustomerCards: jest.fn()
  }
})

test('get business profile', () => {
  db.getCustomerProfile.mockImplementation(() => {
    return Promise.resolve([
      { id: 1, name: 'customer1', user_name: 'customer1', user_type: 'customer', hash: 'password' },
      { id: 2, name: 'customer2', user_name: 'customer2', user_type: 'business', hash: 'password' }
    ])
  })
  return request(server)
    .get('/customer/1')
    .then((res) => {
      expect(res.body[0].name).toBe('customer1')
      return null
    })
})
