const path = require('path')
const express = require('express')
const cors = require('cors')
const passport = require('passport')
const passportLocal = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

server.use(session({
  secret: 'secretcode',
  resave: true,
  saveUninitialized: true
}))

server.use(cookieParser('secretcode'))

// Routes
server.post('/login', (req, res) => {
  console.log(req.body)
})
server.post('/register', (req, res) => {
  console.log(req.body)
})
server.get('/user', (req, res) => {})

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
