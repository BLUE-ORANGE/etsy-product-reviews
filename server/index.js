const express = require('express');
var bodyParser = require('body-parser');
var storyRouter = require('./router.js');


let app = express();

app.use(bodyParser.text());
// app.use(bodyParser.json());

app.use(express.static(__dirname + '/../src/client/'));

app.use('/productId', storyRouter);

let port = 3004;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

