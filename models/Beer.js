const mongoose = require('mongoose')

const beerSchema = new mongoose.Schema({
    username: String,
    brewery_name: String,

    name: {type: String, required: [true, 'no name given']},
    style: String,
    rating: Number,
})

const Beer = mongoose.model('Beer', beerSchema)

module.exports = Beer