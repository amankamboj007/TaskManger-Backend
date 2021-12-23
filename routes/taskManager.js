const router = require('express').Router()
const taskManagerController = require('../controller/taskManger.controller')

//API's For list
router.post('/list', taskManagerController.addList)
router.get('/list', taskManagerController.getList)
router.put('/list', taskManagerController.updateList)
router.delete('/list/:id', taskManagerController.deleteList)

//API's For Task
router.post('/task',)

module.exports = router