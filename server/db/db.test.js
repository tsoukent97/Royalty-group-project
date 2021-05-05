const testEnv = require('../test-environment')
const db = require('./db')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('getCustomers gets all customers', () => {
  const expected = 5
  return db.getCustomers(testDb)
    .then(customers => {
      const actual = customers.length
      return expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})
