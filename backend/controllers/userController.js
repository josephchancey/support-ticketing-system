const asyncHandler = require('express-async-handler')

// @desc    Register a new user
// @route   /api/users
// @access  Public
const registerUser = asyncHandler( async (req, res) =>{
    const { name, email, password } = req.body;

    // validation
    if(!name || !email || !password){
    res.status(400)
    throw new Error('Check entered fields, ensure all are populated and correct.')
    };

    res.send('Register User Route');
});

// @desc    Login existing user
// @route   /api/users/login
// @access  Public
const loginUser = asyncHandler( async (req, res) =>{
    res.send('Login User Route')
});


module.exports = {
    registerUser,
    loginUser
};