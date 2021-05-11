const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/:id', (req, res) => {
  db.getBusinessProfile(req.params.id)
    .then(business => {
      return res.json(business)
    }).catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id/customers', (req, res) => {
  db.getCustomers(req.params.id)
    .then(customers => {
      return res.json(customers)
    }).catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('./:id/business', (req, res) => {
  db.addBusiness(req.params.id)
    .then(business => {
      return res.json(business)
    }).catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.patch('/:id/delete', (req, res) => {
  db.deleteBusiness(req.params.id)
    .then(() => {
      return res.status(200).send()
    }).catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
