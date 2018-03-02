const express = require('express');
const db = require('../database/index');

const router = express.Router();

router.route('/:id/reviews')
  .get((req, res) => {
    const { id } = req.params;

    if (id >= 0 && id <= 199) {
      db.getReviewsForProduct(id, (err, data) => {
        res.status(200);

        res.send(data);
      });
    } else {
      res.status(404);
      res.send('invalid productId');
    }
  });

module.exports = router;
