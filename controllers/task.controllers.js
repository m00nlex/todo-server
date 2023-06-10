const {Task} = require("../models/models");

class TaskController {
    async getOneTask(req, res){
        const taskId = req.params.id
        const task = await Task.findByPk(taskId)
        res.json(task)
    }
    async getTasks(req, res){
        const tasks = await Task.findAll()
        return res.json(tasks)
    }
    async addNewTask(req, res){
        const {name} = req.body
        const task = await Task.create({name})
        return res.json({name})
    }
    async deleteTask(req, res){
        const {id} = req.body
        const task = await Task.destroy({id})
        return res.json({id})
    } //!!!!!!!!!!!!!!!!!!!!!!!!!!!
}

module.exports =  new TaskController()