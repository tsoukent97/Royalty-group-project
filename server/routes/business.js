const express = require('express')
const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
    db.getUserCards(id)
    .then(cards => {
        console.log(cards)
        return res.json(cards)
    }) .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
})