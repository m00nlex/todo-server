const Router = require('express')
const router = new Router()
const taskRouter = require('./task.routes.js')

router.use('/tasks', taskRouter)

module.exports = router