const request = require('supertest')
const db = require('../db/db')
const server = require('../server')

jest.mock('../db/db', () => {
  return {
    getCustomerProfile: jest.fn(),
    getCustomerCards: jest.fn(),
    deleteCustomer: jest.fn()
  }
})

test('get customer profile', () => {
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

test('deletes a customer profile', () => {
  db.deleteCustomer.mockImplementation(() => {
    return Promise.resolve([
      { id: 1, name: 'customer1', user_name: 'customer1', user_type: 'customer', hash: 'password' },
      { id: 2, name: 'customer2', user_name: 'customer2', user_type: 'business', hash: 'password' }
    ])
  })

  return request(server)
    .patch('/customer/1/delete')
    .then((res) => {
      expect(res.status).toEqual(200)
      return null
    })
})
