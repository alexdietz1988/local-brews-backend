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

router.post('/', async (req, res) => { 
    console.log(req.body) 
    try {
        await db.Beer.create(req.body)
        res.json({ success: true })
    } catch (error) {
        res.status(400).json(error)
    }
})

router.delete('/', async (req, res) => {
    try {
        await db.Beer.findOneAndDelete({name: req.body.name, brewery_id: req.body.brewery_id, user: req.body.user})
        res.json({ success: true })
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router