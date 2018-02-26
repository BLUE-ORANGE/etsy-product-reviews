var express = require('express');
var router = express.Router();
var review = require('')

router.route('/:id/reviews')
  .get(function(req, res) {
      let id = req.params.id;
      res.send(id);
  });

module.exports = router;