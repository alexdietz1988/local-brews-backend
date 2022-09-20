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
    console.log(req.body)
    try {
        await db.Brewery.create(req.body)
        res.json({ success: true })
    } catch (error) {
        res.status(400).json(error)
    }
})

router.delete('/', async (req, res) => {  
    try {
        await db.Brewery.findOneAndDelete({
            user: req.body.user,
            breweryId: req.body.breweryId,
            name: req.body.name
        })
        res.json({ success: true })
    } catch (error) {
        res.status(400).json(error)
    }
})

router.get('/:user/:breweryId', async (req, res) => {
    try {
        const breweryLog = await db.Beer.find({user: req.params.user, breweryId: req.params.breweryId})
        res.json({ success: true, data: breweryLog })
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router