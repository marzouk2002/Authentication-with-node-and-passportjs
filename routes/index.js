const express = require('express')
const router = express.Router()
const { ensureAuth }  =require('../config/auth')

//welcome page
router.get('/', ensureAuth, (req, res) => {
    res.render('welcome')
})

// Dashboard page
router.get('/dashboard', ensureAuth, (req, res) => {
    res.render('dashboard', {
        name: req.user.name
    })
})


module.exports = router;