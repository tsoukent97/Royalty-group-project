const request = require('supertest')
const db = require('../db/db')
const server = require('../server')

jest.mock('../db/db', () => {
  return {
    addCustomer: jest.fn(),
    addBusiness: jest.fn()
  }
})

test('adds a new customer profile', () => {
  db.addCustomer.mockImplementation(() => {
    return Promise.resolve([
      { id: 1, name: 'customer1', user_name: 'customer1', user_type: 'customer', hash: 'password' },
      { id: 2, name: 'customer2', user_name: 'customer2', user_type: 'business', hash: 'password' }
    ])
  })
  return request(server)
    .post('/')
    .then((res) => {
      expect(res.body).toEqual({})
      return null
    })
})

test('adds a new business profile', () => {
  db.addBusiness.mockImplementation(() => {
    return Promise.resolve([
      { id: 1, name: 'business1', user_type: 'business', hash: 'password', address: 'address1', phone_number: 123, email: 'test1@test.com' },
      { id: 2, name: 'business2', user_type: 'business', hash: 'password', address: 'address2', phone_number: 1234, email: 'test2@test.com' }
    ])
  })
  return request(server)
    .post('/')
    .then((res) => {
      expect(res.body).toEqual({})
      return null
    })
})
  
