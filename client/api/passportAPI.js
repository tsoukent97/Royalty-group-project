import request from 'superagent'

export function loginCustomer (customer) {
  return request.post('/login')
    .send({
      username: customer.username,
      password: customer.password
    })
    .then(res => res.body)
}

export function loginBusiness (business) {
  return request.post('/loginBusiness')
    .send({
      business: business.business,
      password: business.password
    })
}
export function registerUser (user) {
  return request.post('/register')
    .send(user)
    .then(res => res.body)
}

export function registerBusiness (business) {
  return request.post('/registerBusiness')
    .send(business)
    .then(res => res.body)
}

export function logOut () {
  console.log('api logout')
  return request
    .post('/logout')
    .then(res => res.body)
}
