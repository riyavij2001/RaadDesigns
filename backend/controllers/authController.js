const { LoginUser } = require('../index');

// Login
const loginUser = async (req, res) => {
    res.json({ message: 'Login User' });
};

// Sign Up
const signUpUser = async (req, res) => {
    res.json({ message: 'SignUp User' });
};

module.exports = {
    signUpUser,
    loginUser
};
