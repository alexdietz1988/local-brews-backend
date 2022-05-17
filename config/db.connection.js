const mongoose = require('mongoose')
require('dotenv').config()

const URI = process.env.MONGODB_URI

mongoose.connect(URI)

mongoose.connection.on('connected', () => console.log('MongoDB connected'))
mongoose.connection.on('error', (error) => console.log('MongoDB connection error', error))
mongoose.connection.on('disconnect', () => console.log('MongoDB disconnected'))