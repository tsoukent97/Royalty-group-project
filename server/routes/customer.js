/* eslint-disable promise/no-nesting */
const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/:id/cards', (req, res) => {
  db.getCustomerCards(req.params.id)
    .then(cards => {
      return res.json(cards)
    }).catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.patch('/deleteCard', (req, res) => {
  const { businessId, customerId } = req.query
  db.deleteCard(businessId, customerId)
    .then(() => {
      return res.status(200).send()
    }).catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/allCards', (req, res) => {
  db.getAllCards()
    .then(cards => {
      return res.json(cards)
    }).catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/addCard', (req, res) => {
  const { businessId, customerId } = req.query
  db.cardExists(businessId, customerId)
    .then((cardList) => {
      if (cardList.length === 0) {
        db.addCard(businessId, customerId)
          .then(() => {
            return res.json('Card added successfully!')
          }).catch(err => {
            res.status(500).send('DATABASE ERROR: ' + err.message)
          })
      } else {
        return res.json('You already have this card')
      } return null
    }).catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/customerInfo', (req, res) => {
  const { name } = req.query
  db.getCustomerByUsername(name)
    .then((customer) => {
      return res.json(customer)
    }).catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.patch('/', (req, res) => {
  const { businessId, customerId } = req.query
  db.getStampCount(businessId, customerId)
    .then(customer => {
      return db.updateStampCount(businessId, customerId, customer[0].stamp_count)
        .then(() => {
          return res.status(200).send()
        }).catch(err => {
          res.status(500).send('DATABASE ERROR: ' + err.message)
        })
    }).catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/stampCount', (req, res) => {
  const { businessId, customerId } = req.query
  db.getStampCount(businessId, customerId)
    .then(count => {
      return res.json(count)
    }).catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.patch('/reset', (req, res) => {
  const { businessId, customerId } = req.query
  db.resetStampCount(businessId, customerId)
    .then(() => {
      return res.status(200).send()
    }).catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id', (req, res) => {
  console.log()
  db.getCustomerById(req.params.id)
    .then(customer => {
      return res.json(customer)
    }).catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
