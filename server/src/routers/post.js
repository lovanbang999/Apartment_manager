const express = require('express');
const router = express.Router();

const Post = require('../app/models/Post');
const verifyToken = require('../middleware/auth');
const { verify } = require('argon2');

// @router [GET] /api/posts
// @desc Get post
// @access Private
router.get('/', verifyToken, async (req, res) => {
    try {
        const posts = await Post.find({ user: req.userId }).populate('user', ['username']);
        res.json({ success: true, posts });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error!' });
    }
});

// @router [PUT] /api/posts
// @desc Update post
// @access Private
router.put('/:id', verifyToken, async (req, res) => {
    const { title, description, url } = req.body;

    // Simple vadidation
    if (!title) return res.status(400).json({ success: false, message: 'Title is required' });

    try {
        let updatePost = {
            title,
            description: description || '',
            url: (url.startsWith('https://') ? url : `https://${url}`) || '',
        };

        const postUpdateCondition = { _id: req.params.id, user: req.userId };

        updatePost = await Post.findOneAndUpdate(postUpdateCondition, updatePost, { new: true });

        // User not authorized to update post or post not found
        if (!updatePost)
            return res.status(401).json({ success: false, message: 'Post not found or user not authorized' });

        res.status(200).json({ success: true, message: 'Updated post successfully', post: updatePost });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error!' });
    }
});

// @router [DELETE] /api/posts
// @desc Delete post
// @access Private
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const postDeleteCondition = { _id: req.params.id, user: req.userId };

        const deletePost = await Post.findOneAndDelete(postDeleteCondition);

        // User not authorized or post not found
        if (!deletePost)
            return res.status(401).json({ success: false, message: 'Post not found or user not authorized' });

        res.status(200).json({ success: true, message: 'Deleted post successfully', post: deletePost });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error!' });
    }
});

// @router [POST] /api/posts
// @desc Create post
// @access Private
router.post('/', verifyToken, async (req, res) => {
    const { title, description, url } = req.body;

    // Simple vadidation
    if (!title) return res.status(400).json({ success: false, message: 'Title is required' });

    try {
        const newPost = new Post({
            title,
            description,
            url: url.startsWith('https://') ? url : `https://${url}`,
            user: req.userId,
        });

        await newPost.save();

        res.status(200).json({ success: true, message: 'Created post successfully', post: newPost });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error!' });
    }
});

module.exports = router;
