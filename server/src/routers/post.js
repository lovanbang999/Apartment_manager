const express = require('express');
const router = express.Router();

const Post = require('../app/models/Post');

// @router [POST] /api/posts
// @desc Create post
// @access Private

router.post('/', async (req, res) => {
    const { title, description, url } = req.body;

    // Simple vadidation
    if (!title) return res.status(400).json({ success: false, message: 'Title is required' });

    try {
        const newPost = new Post({
            title,
            description,
            url: url.startsWith('https://') ? url : `https://${url}`,
            user: '650f0b5fcefc7361b7590a4c',
        });

        await newPost.save();

        res.status(200).json({ success: true, message: 'Created post successfully', post: newPost });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error!' });
    }
});

module.exports = router;
