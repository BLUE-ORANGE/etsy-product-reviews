const db = require('../index');

test('checks if reviews array has productIds 120', () => {
  let dataReview;
  db.getReviewsForProduct(120, (err, data) => {
    dataReview = data;
  });
  console.log(dataReview);
  expect(dataReview[0].productId).toBe(120);
});
