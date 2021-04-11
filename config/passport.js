const localStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

// Load User Model
const User = require('../models/User')

module.exports = function(passport) {
    passport.use(
        new localStrategy({ usernameField: 'email' }, (email, password, done)=>{
            User.findOne({email: emai})
                .then(user => {
                    if(!user) {
                        return done(null, false, {msg: 'That email is not registered'})
                    }

                    bcrypt.compare(password, user.password, (err, isMath)=>{
                        if(err) throw err
    
                        if(isMath) {
                            return done(null, user)
                        }else {
                            return done(null, false, {msg: 'Password incorrect'})
                        }
                    })
                })
                .catch(err => console.log(err))
        })
    )
    
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
}
