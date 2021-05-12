import request from 'supertest'
import server from '../../server/server'
import { getCustomers } from '../../server/db/db'

jest.mock('../../server/db/db', () => ({
  getCustomers: jest.fn()
}))

test('returns a customer', () => {
  getCustomers.mockImplementation(() => {
    return Promise.resolve([
      { id: 1, username: 'sam', password: 1234 },
      { id: 2, username: 'aaron', password: 5678 }
    ])
  })
  expect.assertions(1)
  return request(server)
    .get('/business' + '/' + 1 + '/customers')
    .then(res => {
      expect(res.body).toHaveLength(2)
      return null
    })
})
