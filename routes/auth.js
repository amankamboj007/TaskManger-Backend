const router = require('express').Router()
const authcontroller = require('../controller/auth.controller')

router.post('/signUp', authcontroller.signUp)
router.post('/login', authcontroller.login)


module.exports = router