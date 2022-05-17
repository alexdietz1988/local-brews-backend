const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', (req, res) => {
    res.send('hello world')
})

router.get('/my-list/:user', async (req, res, next) => {
    try {
        const myList = await db.Brewery.find({username: 'alex'})
        console.log(myList)
        res.send(myList)
    } catch (error) {
        req.error = error
        console.log(error)
        return next()
    }
})

router.post('/new-user', async (req, res, next) => {
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

router.post('/add-brewery/:username/:city/:state/:id', async (req, res, next) => {
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

router.put('/update-brewery/:id', async (req, res, next) => {
    try {
        await db.Brewery.findByIdAndUpdate(req.params.id, req.body)
        return res.redirect('/')
    } catch (error) {
        req.error = error
        console.log(error)
        return next()
    }
})

router.delete('/remove-brewery/:id', async (req, res, next) => {
    try {
        await db.Brewery.findByIdAndDelete(req.params.id)
        return res.redirect('/')
    } catch (error) {
        req.error = error
        console.log(error)
        return next()
    }
})

module.exports = router