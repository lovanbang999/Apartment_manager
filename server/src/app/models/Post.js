const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Post = new Schema(
    {
        title: { type: String, require: true },
        description: { type: String },
        url: { type: String },
        user: { type: Schema.Types.ObjectId, ref: 'User' },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Post', Post);
