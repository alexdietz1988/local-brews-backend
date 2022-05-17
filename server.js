const express = require('express')
const app = express()
const PORT = 4000
require('./config/db.connection.js')
const db = require('./models')
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/new-user', async (req, res, next) => {
    try {
        await db.User.create(req.body)
        return res.redirect('/')
    } catch (error) {
        req.error = error
        console.log(error)
        return next()
    }
})

app.listen(PORT, () => console.log('listening on PORT ' + PORT))