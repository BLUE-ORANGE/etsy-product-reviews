const db = require('../index');

test('checks if reviews array has productIds 120', () => {
  let dataReview;
  db.getReviewsForProduct(120, (err, data) => {
    console.log('this is the data', data);
  });
  console.log(dataReview);
  expect(120).toBe(120);
});


db.getReviewsForProduct(200, (err, data) => {
  console.log(data);
});