const express = require('express')
const router = express.Router()
const db = require('../db/db')

// red lines are only because of linting, doesnt like nesting promises fro some reason
router.get('/', (req, res) => {
  const { name, userName } = req.params.body
  db.addCustomer(name, userName)
    .then(id => {
      db.getCustomerProfile(id)
        .then(customer => {
          return res.json(customer)
        }).catch(err => {
          res.status(500).send('DATABASE ERROR: ' + err.message)
        })
    }).catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// red lines are only because of linting, doesnt like nesting promises fro some reason
router.get('/', (req, res) => {
  const { name, address, phoneNumber, email } = req.params.body
  db.addBusiness(name, address, phoneNumber, email)
    .then(id => {
      db.getBusinessProfile(id)
        .then(business => {
          return res.json(business)
        }).catch(err => {
          res.status(500).send('DATABASE ERROR: ' + err.message)
        })
    }).catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
