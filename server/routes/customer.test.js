const request = require('supertest')
const db = require('../db/db')
const server = require('../server')

jest.mock('../db/db', () => {
  return {
    getCustomerById: jest.fn(),
    getStampCount: jest.fn(),
    getCustomerCards: jest.fn(),
    getAllCards: jest.fn()
  }
})

test('get customer profile', () => {
  db.getCustomerById.mockImplementation(() => {
    return Promise.resolve([
      { id: 1, name: 'customer1', username: 'customer1', user_type: 'customer', hash: 'password' },
      { id: 2, name: 'customer2', username: 'customer2', user_type: 'business', hash: 'password' }
    ])
  })
  return request(server)
    .get('/customer/1')
    .then((res) => {
      expect(res.body[0].name).toBe('customer1')
      return null
    })
})

test('get customer stamp count', () => {
  db.getStampCount.mockImplementation(() => {
    return Promise.resolve([
      { business_id: 1, customer_id: 1, stamp_count: 1 },
      { business_id: 2, customer_id: 2, stamp_count: 2 }
    ])
  })
  return request(server)
    .get('/customer/stampCount?businessId=1&customerId=1')
    .then((res) => {
      expect(res.body[0].stamp_count).toEqual(1)
      return null
    })
})

test('get cards of a specific customer', () => {
  db.getCustomerCards.mockImplementation(() => {
    return Promise.resolve([
      { business_id: 1, customer_id: 1, stamp_count: 1 },
      { business_id: 2, customer_id: 1, stamp_count: 2 }
    ])
  })
  return request(server)
    .get('/customer/stampCount?businessId=1&customerId=1')
    .then((res) => {
      expect(res.body).toHaveLength(2)
      return null
    })
})

test('get all cards', () => {
  db.getAllCards.mockImplementation(() => {
    return Promise.resolve([
      { id: 101, business: 'Starbucks', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/starbucks.jpg' },
      { id: 102, business: 'Gong Cha', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/gong-cha.jpg' },
      { id: 103, business: 'Eb Games', userType: 'business', password: 'password', address: '2 Fun Lane', phoneNumber: 123, email: 'example@example.com', logo: './images/eb-games.jpg' }
    ])
  })
  return request(server)
    .get('/customer/allCards')
    .then((res) => {
      expect(res.body).toHaveLength(3)
      return null
    })
})
