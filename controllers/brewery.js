const express = require('express')
const router = express.Router()
const db = require('../models')

router.post('/', async (req, res) => {  
    try {
        let newBrewery = await db.Brewery.create(req.body)
        res.json(newBrewery)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        await db.Brewery.findByIdAndUpdate(req.params.id, req.body)
        return res.redirect('/')
    } catch (error) {
        req.error = error
        console.log(error)
        return next()
    }
})

router.delete('/:id', async (req, res, next) => {
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