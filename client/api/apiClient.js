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

export function deleteCard (businessId, customerId) {
  return request
    .patch(customerServer + '/deleteCard?businessId=' + businessId + '&customerId=' + customerId)
    .then(res => res.body)
}

export function getStampCount (businessId, customerId) {
  return request
    .get(customerServer + '/stampCount?businessId=' + businessId + '&customerId=' + customerId)
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

export function getAllCards () {
  return request
    .get(customerServer + '/allCards')
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
