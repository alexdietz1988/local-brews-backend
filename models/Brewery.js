const mongoose = require('mongoose')

const brewerySchema = new mongoose.Schema({
    username: {type: String, required: true},
    id: {type: String, required: true},
    name: {type: String, required: true},
    location: String
})

const Brewery = mongoose.model('Brewery', brewerySchema)

module.exports = Brewery