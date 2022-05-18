const express = require('express')
const app = express()
const PORT = 4000
require('./config/db.connection.js')
const cors = require('cors')
const morgan = require('morgan')
const controllers = require('./controllers')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(express.json())

app.use('/brewery', controllers.brewery)
app.use('/lists', controllers.lists)

app.listen(PORT, () => console.log('listening on PORT ' + PORT))