const express = require('express')
const router = express.Router()
const db = require('../models')

router.post('/', async (req, res) => {  
    try {
        console.log(req.body)
        let newBrewery = await db.Brewery.create(req.body)
        res.json(newBrewery)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.delete('/:user/:id', async (req, res) => {  
    try {
        await db.Brewery.findOneAndDelete({username: req.params.user, brewery_id: req.params.id})
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router