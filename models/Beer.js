const mongoose = require('mongoose')

const beerSchema = new mongoose.Schema({
    username: String,
    brewery_id: String,
    name: {type: String, required: [true, 'no name given']},
    style: String,
    rating: String,
})

const Beer = mongoose.model('Beer', beerSchema)

module.exports = Beer