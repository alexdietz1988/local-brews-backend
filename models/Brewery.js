const mongoose = require('mongoose')

const brewerySchema = new mongoose.Schema({
    username: {type: String, required: true},
    brewery_id: {type: String, required: true},
    location: String
})

const Brewery = mongoose.model('Brewery', brewerySchema)

module.exports = Brewery