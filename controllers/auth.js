const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const { User } = require('../models')

router.post('/', async (req, res) => {
    try {
        const foundUser = await User.exists({username: req.body.username})
        if (foundUser) return res.send('found user')

        const salt = await bcrypt.genSalt(12)
        const hash = await bcrypt.hash(req.body.password, salt)
        req.body.password = hash

        await User.create(req.body)

        return res.send('user created')
    } catch (error) {
        console.log(error)
        req.error = error
        return res.send(error)
    }
})

router.post('/login', async (req, res) => {
    try {
        const foundUser = await User.findOne({ username: req.body.username })
        const match = await bcrypt.compare(req.body.password, foundUser.password)
        if (!match) return res.send('invalid username or password')
        return res.json('success')
    } catch (error) {
        console.log(error)
        req.error = error
        return res.send(error)
    }
})

module.exports = router