const mongoose = require('mongoose')

const beerSchema = new mongoose.Schema({
    user: String,
    breweryId: String,
    breweryName: String,
    breweryLocation: String,

    name: {type: String, required: [true, 'no name given']},
    style: String,
    rating: String,
})

const Beer = mongoose.model('Beer', beerSchema)

module.exports = Beer