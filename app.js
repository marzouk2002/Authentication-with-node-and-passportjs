const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const falsh = require('connect-flash')
const session = require('express-session')

const app = express()

//DB config
const db =require('./config/keys').MongoURI

mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB connected!...'))
    .catch( err => console.log(err))

// EJS
app.use(expressLayouts)
app.set('view engine', 'ejs')

// Bodyparser
app.use(express.urlencoded({ extended: false }))

// Express session

// Routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

const PORT = process.env.port || 5000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}!`)
})