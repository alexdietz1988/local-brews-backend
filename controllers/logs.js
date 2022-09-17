const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/my-list/:user', async (req, res) => {
    try {
        let myList = await db.Brewery.find({user: req.params.user})
        res.json(myList)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.get('/beer-log/:user', async (req, res) => {
    try {
        let beerLog = await db.Beer.find({user: req.params.user})
        res.json(beerLog)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.get('/beer-log/:user/:breweryId', async (req, res) => {
    try {
        let breweryLog = await db.Beer.find({
            user: req.params.user,
            brewery_id: req.params.breweryId})
        res.json(breweryLog)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.post('/beer', async (req, res) => {  
    try {
        let newBeer = await db.Beer.create(req.body)
        res.json(newBeer)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.delete('/beer/:id', async (req, res) => {  
    try {
        await db.Beer.findByIdAndDelete(req.params.id)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router