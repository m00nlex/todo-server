const Router = require('express')
const router = new Router()
const TaskController = require('../controllers/task.controllers.js')
const {Task} = require("../models/models");

router.get('/:id', TaskController.getOneTask) //  ../api/tasks/1
router.get('/', TaskController.getTasks)
router.post('/', TaskController.addNewTask)
router.delete('/:id', TaskController.deleteTask)

module.exports = router