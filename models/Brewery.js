const mongoose = require('mongoose')

const brewerySchema = new mongoose.Schema({
    username: String,
    brewery_id: String,
    name: {type: String, required: [true, 'no name given']},
    location: String
})

const Brewery = mongoose.model('Brewery', brewerySchema)

module.exports = Brewery