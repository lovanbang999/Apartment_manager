const agon2 = require('argon2');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

class AuthController {
    // @router [GET] api/auth
    // @desc Check if user is login
    // @access Public
    async index(req, res) {
        try {
            const user = await User.findById(req.userId).select('-password -email');

            // User not found
            if (!user) return res.status(400).json({ success: false, message: 'Không tìm thấy người dùng' });

            res.status(200).json({ success: true, user });
        } catch (error) {
            // Internal server error
            console.log(error);
            res.status(500).json({ success: false, message: 'Lỗi từ phía máy chủ!' });
        }
    }

    // @router [POST] api/auth/register
    // @desc Register user
    // @access public
    async register(req, res) {
        const { username, email, password } = req.body;

        // simple vadidation [Can use the libraray later]
        if (!username || !email || !password)
            // Missing username and/or password
            return res.status(400).json({ success: false, message: 'Không tồn tại tên đăng nhập hoặc/và mật khẩu' });

        try {
            // Check for existing user
            const user = await User.findOne({ username });

            // Username already taken
            if (user) return res.status(400).json({ success: false, message: 'Tên đăng nhập đã tồn tại' });

            // All good
            const hashedPassword = await agon2.hash(password);

            const newUser = new User({ username, email, password: hashedPassword });
            await newUser.save();

            // Return token
            const accessToken = jwt.sign({ userId: newUser._id }, process.env.ACCESS_TOKEN_SECRET);

            // User created successfully
            res.json({ success: true, message: 'Tạo tài khoản thành công', accessToken });
        } catch (error) {
            // Internal server error!
            console.log(error);
            res.status(500).json({ success: false, message: 'Lỗi từ phía máy chủ!' });
        }
    }

    // @router [POST] api/auth/login
    // @desc Login user
    // @access public
    async login(req, res) {
        const { username, email, password } = req.body;

        // simple vadidation [Can use the libraray later]
        if (!username || !email || !password)
            // Missing username and/or password
            return res.status(400).json({ success: false, message: 'Không tồn tại tên đăng nhập hoặc/và mật khẩu' });

        try {
            // Check for existing user
            const user = await User.findOne({ username });

            if (!user)
                return res
                    .status(400)
                    .json({ success: false, message: 'Tên đăng nhập hoặc mật khẩu/email không đúng' });

            // Username found
            // Check valid password and email valid
            const passwordValid = await agon2.verify(user.password, password);
            const emailValid = user.email === email;
            if (!passwordValid || !emailValid)
                // Incorrect username or email/password
                return res
                    .status(400)
                    .json({ success: false, message: 'Tên đăng nhập hoặc mật khẩu/email không đúng' });

            // All good
            const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET);

            // Login successfully
            res.status(200).json({ success: true, message: 'Đăng nhập thành công', accessToken });
        } catch (error) {
            // Internal server error
            console.log(error);
            res.status(500).json({ success: false, message: 'Lỗi từ phía máy chủ!' });
        }
    }
}

module.exports = new AuthController();
