const Sequelize = require('sequelize');

const sqlz = new Sequelize('etsyv1', 'student', 'student', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
});

const Review = sqlz.define(
  'reviews', {
    review: Sequelize.TEXT,
    rating: Sequelize.INTEGER,
    userName: Sequelize.TEXT,
    productId: Sequelize.INTEGER,
  },
  {
    schema: 'public',
  },
);

// const getReviewByRating = (id, cb) => {
//   Review.findById(id)
//     .then((review) => {
//       cb(null, review);
//     })
//     .catch((err) => {
//       cb(err, null);
//     });
// };

const getReviewsForProduct = id => Review.findAll({
  where: {
    productId: id,
  },
}).then(data => data).catch(error => error);

// const getFiveImages = (cb) => {
//   Review.findAll({
//     where: {
//       id: {
//         gt: 200,
//       },
//     },
//   })
//     .then((data) => {
//       cb(null, data);
//     })
//     .catch((err) => {
//       cb(err, null);
//     });
// };

module.exports.getReviewsForProduct = getReviewsForProduct;


