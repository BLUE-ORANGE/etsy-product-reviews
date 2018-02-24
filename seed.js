let Sequelize = require('sequelize');
let sqlz = new Sequelize('etsyv1', 'student', 'student', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});

const Review = sqlz.define('reviews', {
  review: Sequelize.TEXT,
  rating: Sequelize.INTEGER,
  userName: Sequelize.TEXT,
  productId: Sequelize.INTEGER
},{
  schema: 'public'
});

Review.sync({force: false}).then(() => {
  return Review.create({
    review: 'this is a review test input field into my etsyv1 database',
    rating: 3,
    userName: 'hai',
    productId: 5
  })
})

var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
var loremIpsumWords = loremIpsum.split(' ');
var names = ['richard', 'ivy', 'andrew', 'trevor', 'gowri', 'zack', 'tom', 'hanyu', 'marlin', 'nick', 'joe', 'brian', 'eric', 'jordyn', 'james', 'zaid', 'wayne', 'henry', 'chase', 'moriah', 'anissa', 'andrea', 'austin', 'josh', 'jeffrey'];

var randomNumberGenerator = (max) => {
  return Math.floor(Math.random() * (max + 1))
}

var generateReview = (words) => {
  var review = '';
  for (var i = 0; i < words; i++) {
    if (i < words -1) {
      review += `${loremIpsumWords[randomNumberGenerator(loremIpsumWords.length - 1)]} `
    }
  }
  return review;
}

var generateReviewObject = () => {
  var array = [];
  
  for (var i = 0; i < 200; i++) {
    for (var j = 0; j < 3; j++) {
      array.push({
        review: generateReview(25),
        rating: randomNumberGenerator(5),
        userName: names[randomNumberGenerator(names.length - 1)],
        productId: i
      })
    }
  }

  return array;
}
