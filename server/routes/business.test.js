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

//don't forget to test what happens when bad inputs are passed in or the database fails

test('get business profile', () => {
  db.getBusinessProfile.mockImplementation(() => {
    return Promise.resolve([
      { id: 1, name: 'business1', user_type: 'business', hash: 'password', address: 'address1', phone_number: 123, email: 'test1@test.com' },
      { id: 2, name: 'business2', user_type: 'business', hash: 'password', address: 'address2', phone_number: 1234, email: 'test2@test.com' }
    ])
  })
  return request(server)
    .get('/business/1')
    .then((res) => {
      expect(res.body[0].name).toBe('business1')
      return null
    })
})

test('deletes a business profile', () => {
  db.deleteBusiness.mockImplementation(() => {
    // is this really what deleteBusiness will return? - you could just do Promise.resolve() if you don't care about the return value from the promise
    return Promise.resolve([
      { id: 1, name: 'business1', user_type: 'business', hash: 'password', address: 'address1', phone_number: 123, email: 'test1@test.com' },
      { id: 2, name: 'business2', user_type: 'business', hash: 'password', address: 'address2', phone_number: 1234, email: 'test2@test.com' }
    ])
  })

  return request(server)
    .patch('/business/1/delete')
    .then((res) => {
      expect(res.status).toEqual(200)
      return null
    })
})
// test('get all customers of a business', () => {
//     db.getCustomers.mockImplementation(() => {
//       return Promise.resolve([
//         {}
//       ])

//     })
// })
