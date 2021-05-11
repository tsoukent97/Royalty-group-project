import request from 'superagent'

const rootUrl = 'http://localhost:3000'

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

export function logOut () {
  console.log('api logout')
  return request
    .post(rootUrl + '/logout')
    .then(res => res.body)
}
