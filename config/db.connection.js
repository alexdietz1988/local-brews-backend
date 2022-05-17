const mongoose = require('mongoose')
require('dotenv').config()

const URI = process.env.MONGODB_URI

mongoose.connect(URI)

mongoose.connection
    .on('open', () => console.log('MongoDB connected'))
    .on('close', () => console.log('MongoDB disconnected'))
    .on('error', (error) => console.log('MongoDB connection error', error))
