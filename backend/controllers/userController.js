const asyncHandler = require('express-async-handler');
const bcyrpt = require('bcryptjs');

const User = require('../models/userModel');

// @desc    Register a new user
// @route   /api/users
// @access  Public
const registerUser = asyncHandler( async (req, res) =>{
    const { name, email, password } = req.body;

    // validation
    if(!name || !email || !password){
    res.status(400)
    throw new Error('Check entered fields, ensure all are populated and correct')
    };

    // Check if user exists
    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400)
        throw new Error(`User already exists`)
    };

    // Hash password with bcrypt
    const salt = await bcyrpt.genSalt(10);
    // Pass password and salt to hash the password
    const hashedPassword = await bcyrpt.hash(password, salt);

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    // This will become a JWT later
    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }


    res.send('Register User Route');
});

// @desc    Login existing user
// @route   /api/users/login
// @access  Public
const loginUser = asyncHandler( async (req, res) =>{

    const {email, password} = req.body;

    // get user by email since email is unique in our schema 
    const user = await User.findOne({email})

    // Check if users password matches ecryption - if so then this is correct login
    if(user && (await bcyrpt.compare(password, user.password))){
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(401)
        throw new Error('Invalid login credentials')
    }
});


module.exports = {
    registerUser,
    loginUser
};