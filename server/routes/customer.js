const express = require('express')
const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUserCards(req.params.id)
    .then(cards => {
      console.log(cards)
      return res.status(200)
    }).catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})