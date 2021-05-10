const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/:id', (req, res) => {
  db.getCustomerById(req.params.id)
    .then(customer => {
      return res.json(customer)
    }).catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id/cards', (req, res) => {
  db.getCustomerCards(req.params.id)
    .then(cards => {
      return res.json(cards)
    }).catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.patch('/:id/delete', (req, res) => {
  db.deleteCustomer(req.params.id)
    .then(() => {
      return res.status(200).send()
    }).catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id/addCard', (req, res) => {
  db.getAllCards()
    .then(cards => {
      return res.json(cards)
    }).catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/addCard', (req, res) => {
  const { businessId, customerId } = req.query //I'd personally use params for these variables, but this is ok too
  db.addCard(businessId, customerId)
    .then(id => {
      return res.json(id)
    }).catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/', (req, res) => {
  const { businessId, customerId } = req.query
  db.getStampCount(businessId, customerId)
    .then(customer => {
      //this needs a return in front of it, then you can ditch the catch block and rely on the one on line 62
      db.updateStampCount(businessId, customerId, customer[0].stamp_count)
        .then(() => {
          return res.status(200).send()
        }).catch(err => {
          res.status(500).send('DATABASE ERROR: ' + err.message)
        })
    }).catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
