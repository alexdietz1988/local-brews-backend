const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/my-list/:username', async (req, res) => {
    try {
        let myList = await db.Brewery.find({username: req.params.username})
        res.json(myList)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.get('/beer-log/:username', async (req, res) => {
    try {
        let beerLog = await db.Beer.find({username: req.params.username})
        console.log(beerLog)
        res.json(beerLog)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.get('/beer-log/:username/:breweryId', async (req, res) => {
    try {
        let breweryBeerLog = await db.Beer.find({
            username: req.params.username,
            brewery_id: req.params.breweryId})
        console.log(breweryBeerLog)
        res.json(breweryBeerLog)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.post('/beer', async (req, res) => {  
    try {
        console.log(req.body)
        let newBeer = await db.Beer.create(req.body)
        res.json(newBeer)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router