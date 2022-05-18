const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/my-list/:username', async (req, res) => {
    try {
        const myList = await db.Brewery.find({username: req.params.username})
        res.json(myList)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.get('/beer-log/:username', async (req, res) => {
    try {
        const beerLog = await db.Beer.find({username: req.params.username})
        res.json(beerLog)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.get('/beer-log/:username/:brewery', async (req, res) => {
    try {
        const breweryBeerLog = await db.Beer.find({
            username: req.params.username,
            brewery_name: req.params.brewery})
        res.json(breweryBeerLog)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.post('/beer', async (req, res) => {  
    try {
        const newBeer = await db.Beer.create(req.body)
        res.json(newBeer)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router