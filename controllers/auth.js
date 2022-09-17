const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const { User } = require('../models')

router.post('/', async (req, res) => {
    try {
        const foundUser = await User.exists({user: req.body.user})
        if (foundUser) return res.json('user already exists')

        const salt = await bcrypt.genSalt(12)
        const hash = await bcrypt.hash(req.body.password, salt)
        req.body.password = hash

        await User.create(req.body)
        return res.json('user created')
    } catch (error) {
        console.log(error)
        req.error = error
        return res.json(error)
    }
})

router.post('/login', async (req, res) => {
    try {
        const foundUser = await User.findOne({ user: req.body.user })
        const match = await bcrypt.compare(req.body.password, foundUser.password)
        if (!match) return res.json('invalid username or password')
        return res.json('successfully logged in')
    } catch (error) {
        console.log(error)
        req.error = error
        return res.send(error)
    }
})

module.exports = router