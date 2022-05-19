const express = require('express')
const app = express()
require('./config/db.connection.js')
const cors = require('cors')
const morgan = require('morgan')
const controllers = require('./controllers')
require('dotenv').config()
const PORT = process.env.PORT || 4000
console.log(PORT)

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('You have reached the Local Brews backend')
})

app.use('/brewery', controllers.brewery)
app.use('/logs', controllers.logs)

app.listen(PORT, () => console.log('listening on PORT ' + PORT))