
let Sequelize = require('sequelize');
let sqlz = new Sequelize('etsy', 'student', 'student', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});


const Review = sqlz.define('reviews', {
  description: Sequelize.TEXT,
  rating: Sequelize.INTEGER
},{
  schema: 'public'
});

const Product = sqlz.define('product', {
  name: Sequelize.TEXT,
  description: Sequelize.TEXT,
  price: Sequelize["DOUBLE PRECISION"],
  imageUrl: Sequelize.TEXT
},{
  schema: 'public'
})


// sqlz
//   .authenticate()
//   .then(() => {
//     console.log(`connected`)
//   })
//   .catch(err => {
//     console.error(`unable to connect: ${err}`)
//   })
  
  
  
  // User.sync({force: true}).then(() => {
  //   return User.create({
  //     name: 'trevor',
  //     avatarurl: 'image.jpg'
  //   })
  // })
  // Shop.sync({force: true}).then(() => {
  //   return Shop.create({
  //     avatarurl: 'image.jpg',
  //     name: 'trevors-shop'
  //   })
  // })
  
  User.sync({force: true});
  setTimeout(() => {
    Shop.sync({force: true})
  }, 7000);

  setTimeout(() => {
    Product.belongsTo(Shop);
    Product.sync({force: true});

  }, 7000)

  setTimeout(() => {
    UsersShopsFavorite.belongsTo(User);
    UsersShopsFavorite.belongsTo(Shop)
    UsersShopsFavorite.sync({force:true});

  }, 7000)

  setTimeout(() => {
    UsersProductsFavorite.belongsTo(User);
    UsersProductsFavorite.belongsTo(Product);
    UsersProductsFavorite.sync({force:true});

  }, 7000)
  
  
  setTimeout(() => {
    Review.belongsTo(User)
    Review.belongsTo(Product);
    
    Review.sync({force: true});

  }, 7000);
  // Review.hasMany(User);
  // Review.hasMany(Product);

  setTimeout(() => {
    ProductImageUrl.belongsTo(Product);
    ProductImageUrl.sync({force: true});

  }, 7000)

