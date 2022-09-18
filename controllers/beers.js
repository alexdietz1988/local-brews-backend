const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/:user', async (req, res) => {
    try {
        let beerLog = await db.Beer.find({user: req.params.user})
        res.json(beerLog)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.get('/:user/:breweryId', async (req, res) => {
    try {
        const breweryLog = await db.Beer.find({user: req.params.user, brewery_id: req.params.breweryId})
        res.json({ success: true, data: breweryLog })
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

router.delete('/beer/:id', async (req, res) => {  
    try {
        await db.Beer.findByIdAndDelete(req.params.id)
        res.json({ success: true })
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router