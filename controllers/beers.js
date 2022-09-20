const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/:user', async (req, res) => {
    try {
        const beers = await db.Beer.find({user: req.params.user})
        res.json({ success: true, data: beers})
    } catch (error) {
        res.status(400).json(error)
    }
})

router.post('/', async (req, res) => { 
    try {
        await db.Beer.create(req.body)
        res.json({ success: true })
    } catch (error) {
        res.status(400).json(error)
    }
})

router.delete('/', async (req, res) => {
    try {
        await db.Beer.findOneAndDelete({
            name: req.query.name,
            breweryId: req.query.breweryId,
            user: req.query.user
        })
        res.json({ success: true })
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router