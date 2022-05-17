const express = require('express')
const app = express()
const PORT = 4000
require('./config/db.connection.js')
const db = require('./models')
app.use(express.urlencoded({ extended: false }))
require('method-override')
const cors = require('cors')
const morgan = require('morgan')
const controllers = require('./controllers')

app.use(cors())
app.use(morgan('dev'))

app.use('/', controllers)

app.listen(PORT, () => console.log('listening on PORT ' + PORT))