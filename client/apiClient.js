import request from 'superagent'

const customerServer = 'http://localhost:3000/customer'
const businessServer = 'http://localhost:3000/business'

export function getCustomerCards (id) {
  return request.get(customerServer + '/' + id + '/cards')
    .then(res => res.body)
}

export function deleteCustomer (id) {
  return request
    .patch(customerServer + '/' + id + '/delete')
    .then(res => res.body)
}

export function getStampCount (businessId, customerId) {
  return request
    .get(customerServer + '/stampCount/?businessId=' + businessId + '&customerId=' + customerId)
    .then(res => res.body)
}

export function updateStampCount (businessId, customerId) {
  return request
    .patch(customerServer + '/?businessId=' + businessId + '&customerId=' + customerId)
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

export function deleteBusiness (id) {
  return request
    .patch(businessServer + '/' + id + '/delete')
    .then(res => res.body)
}

