const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema(
    {
        username: { type: String, require: true, unique: true },
        email: { type: String, require: true },
        password: { type: String, require: true },
        roles: { type: Object },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('User', User);
