const router = require('express').Router()
const taskManagerController = require('../controller/taskManger.controller')

//API's For list
router.get('/list', taskManagerController.getList)
router.post('/list', taskManagerController.addList)
router.put('/list', taskManagerController.updateList)
router.delete('/list/:id', taskManagerController.deleteList)

//API's For Task
router.get('/list/:listId/tasks', taskManagerController.getTaskForList)
router.post('/list/:listId/tasks ', taskManagerController.addTaskForList)
router.patch('/list/:listId/tasks/:taskId',taskManagerController.updateTaskForList)
router.delete('/list/:listId/tasks/:taskId',taskManagerController.deleteTaskForList)

module.exports = router