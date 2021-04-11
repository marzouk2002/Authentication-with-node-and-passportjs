const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()

// EJS
app.use(expressLayouts)
app.set('view engine', 'ejs')

// Routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

const PORT = process.env.port || 5000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}!`)
})