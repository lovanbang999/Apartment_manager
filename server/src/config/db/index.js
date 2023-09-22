const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://lovanbangbox9:bang14112004@cluster0.czcssls.mongodb.net/', {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
        process.exit(1);
    }
}

module.exports = { connect };
