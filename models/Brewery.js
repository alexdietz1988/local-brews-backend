const mongoose = require('mongoose')

const brewerySchema = new mongoose.Schema({
    user: String,
    breweryId: {type: String, required: [true, 'no brewery id'], unique: [true, 'must be unique']},
    name: {type: String, required: [true, 'no name given']},
    location: String,
    street: String,
    url: String
})

const Brewery = mongoose.model('Brewery', brewerySchema)

module.exports = Brewery