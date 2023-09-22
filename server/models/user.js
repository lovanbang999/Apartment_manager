const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema(
    {
        username: { type: string, require: true, unique: true },
        password: { type: string, require: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('User', User);
