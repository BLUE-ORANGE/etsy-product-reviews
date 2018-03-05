const express = require('express');
const bodyParser = require('body-parser');
const storyRouter = require('./router.js');
const path = require('path');
const cors = require('cors');


const app = express();
app.use(cors());
// app.use(bodyParser.text());

app.use(express.static(path.join(__dirname, '/../src/client/')));

app.use('/v1/products', storyRouter);

const port = 3004;

app.listen(port, () => console.log(`listening on port ${port}`));

