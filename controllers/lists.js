const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/my-list/:user', async (req, res, next) => {
    try {
        const myList = await db.Brewery.find({username: req.params.user})
        res.send(myList)
    } catch (error) {
        req.error = error
        console.log(error)
        return next()
    }
})

module.exports = router