const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/:id', (req, res) => {
  db.getCustomerProfile(req.params.id)
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

// router.get('/test', (req, res) => {
//   // const { businessId, customerId } = req.query
//   console.log('test')
//   // db.getStampCount(businessId, customerId)
//   //   .then((count) => {
//   //     return res.json(count)
//   //   }).catch(err => {
//   //     res.status(500).send('DATABASE ERROR: ' + err.message)
//   //   })
// })

router.get('/home', (req, res) => {
  console.log('test')
  // db.getCustomerProfile(req.params.id)
  //   .then(customer => {
  //     return res.json(customer)
  //   }).catch(err => {
  //     res.status(500).send('DATABASE ERROR: ' + err.message)
  //   })
})

module.exports = router
