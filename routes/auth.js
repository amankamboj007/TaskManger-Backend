const router = require('express').Router()
const authcontroller = require('../controller/auth.controller')

router.post('/signUp', authcontroller.signUp)


module.exports = router