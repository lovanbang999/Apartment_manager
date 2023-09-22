const express = require('express');
const morgan = require('morgan');
const app = express();

const db = require('./config/db');

const port = 3000;

app.use(morgan('combined'));

// Connect to DB
db.connect;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
