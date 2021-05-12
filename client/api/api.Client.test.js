import request from 'supertest'
import { getCustomerById } from '../../server/db/db'
import server from '../../server/server'

jest.mock('../../server/db/db', () => ({
  getCustomerById: jest.fn()
}))

test('returns a customer by Id', () => {
  getCustomerById.mockImplementation(() => {
    return Promise.resolve([
      { id: 901, username: 'Aaron', userType: 'customer', password: '' },
      { id: 902, username: 'Kent', userType: 'customer', password: '' }
    ])
  })
  expect.assertions(1)
  return request(server)
    .get('/customer/901')
    .then(res => {
      expect(res.body[0].username).toEqual('Aaron')
      return null
    })
})
