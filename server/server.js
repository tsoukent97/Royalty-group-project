const path = require('path')
const express = require('express')
const cors = require('cors')

// if you're going to call it passportRoutes you should call the others customerRoutes etc.
// choose one naming convention and stick to it
const passportRoutes = require('./routes/passport')
const customer = require('./routes/customer')
const business = require('./routes/business')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))
server.use('/', passportRoutes)
server.use('/customer', customer)
server.use('/business', business)

module.exports = server
