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
    itemReview: Sequelize.TEXT,
    date: Sequelize.TEXT,
  },
  {
    schema: 'public',
  },
);

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const loremIpsumWords = loremIpsum.split(' ');
const names = ['richard', 'ivy', 'andrew', 'trevor', 'gowri', 'zack', 'tom', 'hanyu', 'marlin', 'nick', 'joe', 'brian', 'eric', 'jordyn', 'james', 'zaid', 'wayne', 'henry', 'chase', 'moriah', 'anissa', 'andrea', 'austin', 'josh', 'jeffrey'];
const items = ['Inspirational Custom Birthstone Necklace For Mom, Custom Initial Necklace, Mommy Necklace, Family Necklace, Personalized Necklace, Mom Gift', 'Oak Nightstand Valet | Wooden Phone Stand | Phone Charging Dock | Wood Docking Station | Personalized Phone Stand| Kona Stain', 'September Birthstone Necklace, Sapphire Gold Bar Necklace, Layering Necklace, Raw Crystal Necklace, Blue Sapphire, Gift for Girlfriend', 'Basketball Birthday Invitation - Basketball Birthday - Sports Birthday Party - Basketball Party - Basketball Birthday Party', 'Black Panther Movie T Shirt Mens', 'Anime portrait, custom portrait, family portrait, anime, anime poster, cartoon portrait, custom illustration, personalized gift, gift', '	Custom Dog Bandanas / Personalize your dog bandanas with any text or graphic / 100% Cotton bandana / Custom bandanas / Dog apparel'];

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

const generateItemReview = itemsArray => items[randomNumberGenerator(itemsArray.length - 1)];

const generateFakeDate = () => {
  const years = ['2014', '2015', '2016', '2017', '2018'];
  const month = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
  };

  const monthId = randomNumberGenerator(11);
  const yearId = randomNumberGenerator(4);
  const dayId = randomNumberGenerator(31);
  const actualMonth = month[monthId];
  const actualYear = years[yearId];
  const dataResult = `${actualMonth} ${dayId}, ${actualYear}`;

  return dataResult;
};

const generateReviewObject = () => {
  const array = [];
  for (let i = 0; i < 200; i += 1) {
    const randomItemReview = generateItemReview(items);
    for (let j = 0; j < 3; j += 1) {
      array.push({
        review: generateReview(25),
        rating: randomNumberGenerator(5),
        userName: names[randomNumberGenerator(names.length - 1)],
        productId: i,
        itemReview: randomItemReview,
        date: generateFakeDate(),
      });
    }
  }
  return array;
};

const seedData = () => {
  const data = generateReviewObject();
  Review.sync({ force: true }).then(() => Review.bulkCreate(data)
    .then(() => console.log('saved val hi'))
    .catch(err => console.error('failed', err)))
    .catch(err => console.log('failed', err));
};

seedData();

console.log('hey tried to seed data');
