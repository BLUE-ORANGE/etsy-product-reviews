const express = require('express');
var bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.text());
// app.use(bodyParser.json());

app.use(express.static(__dirname + '/../src/client/'));

// app.post('/products/reviews', function (req, res) {

// });

let port = 3004;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

