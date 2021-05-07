const path = require('path')
const express = require('express')
const cors = require('cors')
const passportRoutes = require('./routes/passport')

const customer = require('./routes/customer')
const business = require('./routes/business')
const landing = require('./routes/landing')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))
server.use('api/v1/auth', passportRoutes)
server.use('/customer', customer)
server.use('/business', business)
server.use('/', landing)

module.exports = server
