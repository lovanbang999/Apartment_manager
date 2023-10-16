const express = require('express');
const router = express.Router();

const authController = require('../app/controllers/AuthController');
const verifyToken = require('../middleware/auth');
const ROLES_LIST = require('../config/roles_list');
const verifyRoles = require('../middleware/verifyRoles');

router.get('/', verifyToken, authController.index);
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
