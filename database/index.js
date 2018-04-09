const Sequelize = require('sequelize');
require('dotenv').config();

const sqlz = new Sequelize('etsy-richard', 'student', 'student', {
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
    itemReview: Sequelize.TEXT,
    date: Sequelize.TEXT,
  },
  {
    schema: 'public',
  },
);

const getReviewsForProduct = (id, cb) => Review.findAll({
  where: {
    productId: id,
  },
}).then(data => cb(null, data)).catch(error => error);


const getAllReviews = (id, cb) => Review.findAll({
  where: {
  },
}).then(data => cb(null, data)).catch(error => error);

module.exports.getReviewsForProduct = getReviewsForProduct;
