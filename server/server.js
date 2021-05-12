const path = require('path')
const express = require('express')
const cors = require('cors')

const passport = require('./routes/passport')
const customer = require('./routes/customer')
const business = require('./routes/business')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))
server.use('/', passport)
server.use('/customer', customer)
server.use('/business', business)

module.exports = server
