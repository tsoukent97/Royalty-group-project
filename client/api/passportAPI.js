import request from 'superagent'

const rootUrl = '/api/v1/auth'

export function loginCustomer (customer) {
  return request.post(rootUrl + '/login')
    .send({
      username: customer.username,
      password: customer.password
    })
    .then(res => res.body)
}

export function registerUser (user) {
  return request.post(rootUrl + '/register')
    .send(user)
    .then(res => res.body)
}
