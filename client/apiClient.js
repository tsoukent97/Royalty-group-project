import request from 'superagent'

const customerServer = 'http://localhost:3000/customer'
const businessServer = 'http://localhost:3000/business'
const landingServer = 'http://localhost:3000'

export function getCustomerProfile (id) {
  return request.get(customerServer + '/' + id)
    .then(res => res.body)
}

export function getCustomerCards (id) {
  return request.get(customerServer + '/' + id + '/cards')
    .then(res => res.body)
}

export function deleteCustomer (id) {
  return request
    .patch(customerServer + '/' + id + '/delete')
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

export function addCustomer (name, userName) {
  return request
    .post(landingServer)
    .send(name, userName)
    .then(res => res.body)
}

export function addBusiness (name, address, phoneNumber, email) {
  return request
    .post(landingServer)
    .send(name, address, phoneNumber, email)
    .then(res => res.body)
}

