require('dotenv').config()
const express = require('express')
const sequelize  = require('./db')
const models = require('./models/models')
const cors  = require('cors')
const fileUpload = require('express-fileupload')
const path = require('path')
const router = require('./routes/index')


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

const PORT = process.env.PORT || 5000

const start = async()=>{
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(5000, console.log(`${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start()