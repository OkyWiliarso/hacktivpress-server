const express = require('express')
const router = express.Router()
const {
  signUp,
  login,
  fblogin
} = require('../controllers/user.controller')

router
  .post('/signup', signUp)
  .post('/login', login)
  .post('/fblogin', fblogin)
  
module.exports = router
