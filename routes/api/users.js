const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
const User = mongoose.model("User");
// const auth = require('../../middleware/auth');

//@route GET api/auth/user
router.post('/api/users/subscribe', (req, res) => {
    const {username, email} = req.body;
    //console.log(req.body);
    if(!username || !email){
        return res.status(400).json({msg:'please enter the details'});
    }
    User.findOne({email})
    .then(user => {
        console.log(user)
        if(user) return res.status(200).json({
            msg: 'user already exists',
            user: user,
            new: false
        });
        const newUser = new User({
            username,
            email
        });
        newUser.save()
        .then(user => {
            res.json({
                user:{
                    id: user.id,
                    name: user.username,
                    email: user.email
                },
                new: true
            });
        })
        .catch(err => {
            console.log(err)
        })
    });
})

router.get('/test', (req, res) => {
    res.send('hello')
})

module.exports = router;
