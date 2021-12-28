const router = require('express').Router()
const taskManager = require('./taskManager')
const authroutes = require('./auth')

router.use('/task', taskManager)
router.use('/auth', authroutes)

module.exports = router