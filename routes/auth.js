const express = require('express')
const router = express.Router()

const {register, login} = require('../controllers/auth')


//syntax 1
// router.route('/register').post(register)
// router.route('/login').post(login)

//syntax 2
router.post('/register', register)
router.post('/login', login)

module.exports = router