const express = require('express');
const router = express.Router();

const postController = require('../app/controllers/PostController');
const verifyToken = require('../middleware/auth');

router.get('/', verifyToken, postController.show);

router.put('/:id', verifyToken, postController.update);

router.delete('/:id', verifyToken, postController.delete);

router.post('/', verifyToken, postController.create);

module.exports = router;
