const express = require('express')
const app = express()
require('./config/db.connection.js')
const cors = require('cors')
const morgan = require('morgan')
const controllers = require('./controllers')
require('dotenv').config()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, you have reached the Local Brews backend')
})

app.use('/breweries', controllers.breweries)
app.use('/beers', controllers.beers)
app.use('/auth', controllers.auth)

app.listen(PORT, () => console.log('listening on PORT ' + PORT))