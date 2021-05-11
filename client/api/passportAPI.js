import request from 'superagent'

export function loginCustomer (customer) {
  return request.post('/login')
    .send({
      username: customer.username,
      password: customer.password
    })
    .then(res => res.body)
}

export function registerUser (user) {
  return request.post('/register')
    .send(user)
    .then(res => res.body)
}

export function logOut () {
  console.log('api logout')
  return request
    .post('/logout')
    .then(res => res.body)
}
