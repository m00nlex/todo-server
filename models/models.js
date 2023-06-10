const sequelize = require('../db.js')
const {DataTypes} = require('sequelize')

const Task = sequelize.define('task', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: false}
})

module.exports = {
    Task
}