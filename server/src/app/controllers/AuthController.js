const agon2 = require('argon2');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

class AuthController {
    // @router [POST] /auth/register
    // @desc Register user
    // @access public
    async register(req, res) {
        const { username, password } = req.body;

        // simple vadidation [Can use the libraray later]
        if (!username || !password)
            return res.status(400).json({ success: false, message: 'Missing username and/or password' });

        try {
            // Check for existing user
            const user = await User.findOne({ username });

            if (user) return res.status(400).json({ success: false, message: 'Username already taken' });

            // All good
            const hashedPassword = await agon2.hash(password);

            const newUser = new User({ username, password: hashedPassword });
            await newUser.save();

            // Return token
            const accessToken = jwt.sign({ userId: newUser._id }, process.env.ACCESS_TOKEN_SECRET);

            res.json({ success: true, message: 'User created successfully', accessToken });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: 'Internal server error!' });
        }
    }

    // @router [POST] /auth/login
    // @desc Login user
    // @access public
    async login(req, res) {
        const { username, password } = req.body;

        // simple vadidation [Can use the libraray later]
        if (!username || !password)
            return res.status(400).json({ success: false, message: 'Missing username and/or password' });

        try {
            // Check for existing user
            const user = await User.findOne({ username });

            if (!user) return res.status(400).json({ success: false, message: 'Incorrect username' });

            // Username found
            const passwordValid = await agon2.verify(user.password, password);
            if (!passwordValid) return res.status(400).json({ success: false, message: 'Incorrect password' });

            // All good
            const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET);

            res.json({ success: true, message: 'Login successfully', accessToken });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: 'Internal server error!' });
        }
    }
}

module.exports = new AuthController();
