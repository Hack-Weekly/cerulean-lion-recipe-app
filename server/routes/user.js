const express = require('express')
const router = express.Router()
const User = require('../models/userModel')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '1d'})
}

//login route
router.post('/login', async(req, res) => {
    const {username, password} = req.body

    try {
        const user = await User.login(username, password)

        const token = createToken(user._id)

        res.status(200).json({username, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
})

//signup route
router.route('/signup').post(async(req, res) => {
    const {username , password} = req.body
    try {
        const user = await User.signup(username, password)

        const token = createToken(user._id)

        res.status(200).json({username, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
})

module.exports = router