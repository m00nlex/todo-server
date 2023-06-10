const express = require('express')
require('dotenv').config()
const router = require('./routes/indexRouter.js')
const sequelize = require('./db.js')
const models = require('./models/models.js')
const  PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.get('/', (req, res) => res.send('hey gey'))
app.use('/api', router)


const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log("server started on port " + PORT))
    } catch (e){
        console.log(e);
    }
}

start()
