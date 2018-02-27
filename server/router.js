const express = require('express');

const router = express.Router();

router.route('/:id/reviews')
  .get((req, res) => {
    const { id } = req.params.id;
    res.send(id);
  });

module.exports = router;
