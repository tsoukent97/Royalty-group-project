import request from 'superagent'

const customerServer = '/customer'
const businessServer = '/business'

export function getCustomerCards (id) {
  return request.get(customerServer + '/' + id + '/cards')
    .then(res => res.body)
}

export function getCustomerByUsername (name) {
  return request.get(customerServer + '/customerInfo?name=' + name)
    .then(res => res.body)
}

export function deleteCustomer (id) {
  return request
    .patch(customerServer + '/' + id + '/delete')
    .then(res => res.body)
}

export function deleteCard (businessId, customerId) {
  return request
    .patch(customerServer + '/deleteCard?businessId=' + businessId + '&customerId=' + customerId)
    .then(res => res.body)
}

export function getStampCount (businessId, customerId) {
  return request
    .get(customerServer + '/' + customerId + '/query?businessId=' + businessId + '&customerId=' + customerId)
    .then(res => res.body)
}

export function updateStampCount (businessId, customerId) {
  return request
    .patch(customerServer + '/?businessId=' + businessId + '&customerId=' + customerId)
    .then(res => res.body)
}

export function resetStampCount (businessId, customerId) {
  return request
    .patch(customerServer + '/reset?businessId=' + businessId + '&customerId=' + customerId)
    .then(res => res.body)
}

export function getAllCards (id) {
  return request
    .get(customerServer + '/' + id + '/addCard')
    .then(res => res.body)
    .catch(err => console.log(err))
}

export function addCard (businessId, customerId) {
  return request
    .post(customerServer + '/addCard/?businessId=' + businessId + '&customerId=' + customerId)
    .send(businessId, customerId)
    .then(res => res.body)
}

export function getBusinessProfile (id) {
  return request.get(businessServer + '/' + id)
    .then(res => res.body)
}

export function getCustomers (id) {
  return request.get(businessServer + '/' + id + '/customers')
    .then(res => res.body)
}

export function getCustomerById (id) {
  return request.get(customerServer + '/' + id)
    .then(res => res.body)
}

export function deleteBusiness (id) {
  return request
    .patch(businessServer + '/' + id + '/delete')
    .then(res => res.body)
}

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
