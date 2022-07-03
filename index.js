const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 5000

app.use('/phones', require('./routes/phoneRoutes'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))