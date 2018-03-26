const express = require('express');
const bodyParser = require('body-parser');
const storyRouter = require('./router.js');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(morgan('combined'));
// app.use(bodyParser.text());


app.use(express.static(path.join(__dirname, '/../src/client/')));

app.use('/v1/product', storyRouter);

const port = process.env.PORT|| 3004;

app.listen(port, () => console.log(`listening on port ${port}`));