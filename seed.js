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

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const loremIpsumWords = loremIpsum.split(' ');
const names = ['richard', 'ivy', 'andrew', 'trevor', 'gowri', 'zack', 'tom', 'hanyu', 'marlin', 'nick', 'joe', 'brian', 'eric', 'jordyn', 'james', 'zaid', 'wayne', 'henry', 'chase', 'moriah', 'anissa', 'andrea', 'austin', 'josh', 'jeffrey'];

const randomNumberGenerator = max => Math.floor(Math.random() * (max + 1));

const generateReview = (words) => {
  let review = '';
  for (let i = 0; i < words; i += 1) {
    if (i < words - 1) {
      review += `${loremIpsumWords[randomNumberGenerator(loremIpsumWords.length - 1)]} `;
    }
  }
  return review;
};

const generateReviewObject = () => {
  const array = [];
  for (let i = 0; i < 200; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      array.push({
        review: generateReview(25),
        rating: randomNumberGenerator(5),
        userName: names[randomNumberGenerator(names.length - 1)],
        productId: i,
      });
    }
  }
  return array;
};

const seedData = () => {
  const data = generateReviewObject();
  Review.sync({ force: true }).then(() => Review.bulkCreate(data)
    .then(val => console.log('saved val hi'))
    .catch(err => console.error('failed', err)))
    .catch(err => console.log('failed', err));
};

seedData();

console.log('hey tried to seed data');


const getReviewsForProduct = (id, cb) => Review.findAll({
  where: {
    productId: id,
  },
}).then(data => cb(null, data)).catch(error => error);

module.exports.getReviewsForProduct = getReviewsForProduct;
