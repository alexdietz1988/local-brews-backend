const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/:user', async (req, res) => {
    try {
        const breweries = await db.Brewery.find({user: req.params.user})
        res.json({ success: true, data: breweries })
    } catch (error) {
        res.status(400).json(error)
    }
})

router.post('/', async (req, res) => {  
    try {
        const newBrewery = await db.Brewery.create(req.body)
        res.json({ success: true, data: newBrewery })
    } catch (error) {
        res.status(400).json(error)
    }
})

router.delete('/:user/:id', async (req, res) => {  
    try {
        await db.Brewery.findOneAndDelete({user: req.params.user, brewery_id: req.params.id})
        res.json({ success: true })
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router