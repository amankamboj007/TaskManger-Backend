const router = require('express').Router()
const taskManager = require('./taskManager')

router.use('/task', taskManager)

module.exports = router