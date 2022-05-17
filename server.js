const express = require('express')
const app = express()
const PORT = 4000
require('./config/db.connection.js')
const db = require('./models')
app.use(express.urlencoded({ extended: false }))
require('method-override')
const cors = require('cors')
const morgan = require('morgan')

app.use(cors())
app.use(morgan('dev'))

app.post('/new-user', async (req, res, next) => {
    console.log(req.body)
    // try {
    //     await db.User.create(req.body)
    //     return res.redirect('/')
    // } catch (error) {
    //     req.error = error
    //     console.log(error)
    //     return next()
    // }
})

app.post('/add-brewery/:username/:city/:state/:id', async (req, res, next) => {
    try {
        await db.Brewery.create({
            username: req.params.username,
            brewery_id: req.params.id,
            location: `${req.params.city}, ${req.params.state}`
        })
        return res.redirect('/')
    } catch (error) {
        req.error = error
        console.log(error)
        return next()
    }
})

app.put('/update-brewery/:id', async (req, res, next) => {
    try {
        await db.Brewery.findByIdAndUpdate(req.params.id, req.body)
        return res.redirect('/')
    } catch (error) {
        req.error = error
        console.log(error)
        return next()
    }
})

app.delete('/remove-brewery/:id', async (req, res, next) => {
    try {
        await db.Brewery.findByIdAndDelete(req.params.id)
        return res.redirect('/')
    } catch (error) {
        req.error = error
        console.log(error)
        return next()
    }
})

app.listen(PORT, () => console.log('listening on PORT ' + PORT))