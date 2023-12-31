const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ success: false, message: 'Error vadidation' });

    try {
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        req.userId = decode.userInfor.userId;
        req.roles = decode.userInfor.roles;
        next();
    } catch (error) {
        console.log(error);
        return res.status(403).json({ success: false, message: 'Invalid token' });
    }
};

module.exports = verifyToken;
