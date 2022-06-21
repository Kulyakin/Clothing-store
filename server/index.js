require('dotenv').config()

const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload') // пкед для загрузки img
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({})) // Подключение обработки файлов
app.use('/api', router)

// Обработка ошибок, последний Middleware
app.use(errorHandler) // Должен регистрироваться в самом конце

// first get method
/*
app.get('/', (req, res) => {
    res.status(200).json({message: 'Working'})
})
*/

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()  // Синхронизация модели с таблицей
/*
        User.sync() — создает таблицу при отсутствии (существующая таблица остается неизменной)
User.sync({ force: true }) — удаляет существующую таблицу и создает новую
User.sync({ alter: true }) — приводит таблицу в соответствие с моделью
*/

        app.listen(PORT, () => console.log(`Server started on ${PORT} port`))
    } catch (warning) {
        console.log('warning')
    }
}

start()
