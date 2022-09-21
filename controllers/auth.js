const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const db = require('../models')

router.post('/', async (req, res) => {
    try {
        const foundUser = await db.User.exists({user: req.body.user})
        if (foundUser) return res.json({
            success: false,
            errorMessage: 'user already exists'})

        const salt = await bcrypt.genSalt(12)
        const hash = await bcrypt.hash(req.body.password, salt)
        req.body.password = hash

        await db.User.create(req.body)
        return res.json({ success: true })
    } catch (error) {
        console.log(error)
        req.error = error
        return res.json(error)
    }
})

router.post('/login', async (req, res) => {
    try {
        const foundUser = await db.User.findOne({ user: req.body.user })
        const match = await bcrypt.compare(req.body.password, foundUser.password)
        if (!match) return res.json({
            success: false,
            errorMessage: 'invalid username or password'
        })
        return res.json({ success: true })
    } catch (error) {
        console.log(error)
        req.error = error
        return res.send(error)
    }
})

module.exports = router