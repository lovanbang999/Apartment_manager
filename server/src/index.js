// Import packages
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');

const db = require('./config/db');
const routes = require('./routers');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

dotenv.config();

// Connect to DB
db.connect();

// Router init
routes(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
