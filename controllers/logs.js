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
        res.json(breweryBeerLog)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.post('/beer', async (req, res) => {  
    try {
        let newBeer = await db.Beer.create(req.body)
        return res.json(newBeer)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.delete('/beer/:id', async (req, res) => {  
    try {
        await db.Beer.findByIdAndDelete(req.params.id)
        res.json('deleted beer')
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router