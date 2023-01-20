// import { faker } from 'faker';
// import {Product} from './models/product';

// export const seedProducts = async () {
// try {

//     const quantity = 10
//     const products = []

//     for (let p = 0; i <quantity; p++) {
//         products.push(
//             new Product({
//                 name: faker.random.word(),
//                 pid: faker.lorem.slug(),
//                 image:faker.image.image(),
//                 brand: faker.random.word(),
//                 description: faker.random.word(),
//                 price: faker.random.number()

//             })
//         )
//     }
//                 


// } catch (error) {
//     console.log(error)
//     }
// }

// seedProducts()


require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Product = require('./models/product');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
      {name: 'man', sortOrder: 20},
      {name: 'woman', sortOrder: 10},
  ]);

  await Product.deleteMany({});
  const products = await Product.create([
    {name: 'loose fit shirt', image: '/images/tight.jpeg', category: categories[0], price: 100},
    {name: 'baggy fit shirt', image: '/images/loose-fit.jpeg', category: categories[0], price: 200},
    {name: 'tight fit shirt', image: '/images/tight.jpeg', category: categories[0], price: 395},
    {name: 'dress', image: '/images/baggyskirt.jpeg', category: categories[1], price: 145},
    {name: 'loose skirt', image: '/images/baggyskirt.jpeg', category: categories[1], price: 135},
    {name: 'red dress', image: '/images/red.jpeg', category: categories[1], price: 255},
    {name: 'loose fit shirt', image: '/images/tight.jpeg', category: categories[0], price: 100},
    {name: 'baggy fit shirt', image: '/images/loose-fit.jpeg', category: categories[0], price: 200},
    {name: 'tight fit shirt', image: '/images/tight.jpeg', category: categories[0], price: 395},
    {name: 'dress', image: '/images/baggyskirt.jpeg', category: categories[1], price: 145},
    {name: 'loose skirt', image: '/images/baggyskirt.jpeg', category: categories[1], price: 135},
    {name: 'red dress', image: '/images/red.jpeg', category: categories[1], price: 255},
    {name: 'loose fit shirt', image: '/images/tight.jpeg', category: categories[0], price: 100},
    {name: 'baggy fit shirt', image: '/images/loose-fit.jpeg', category: categories[0], price: 200},
    {name: 'tight fit shirt', image: '/images/tight.jpeg', category: categories[0], price: 395},
    {name: 'dress', image: '/images/baggyskirt.jpeg', category: categories[1], price: 145},
    {name: 'loose skirt', image: '/images/baggyskirt.jpeg', category: categories[1], price: 135},
    {name: 'red dress', image: '/images/red.jpeg', category: categories[1], price: 255},
    {name: 'loose fit shirt', image: '/images/tight.jpeg', category: categories[0], price: 100},
    {name: 'baggy fit shirt', image: '/images/loose-fit.jpeg', category: categories[0], price: 200},
    {name: 'tight fit shirt', image: '/images/tight.jpeg', category: categories[0], price: 395},
    {name: 'dress', image: '/images/baggyskirt.jpeg', category: categories[1], price: 145},
    {name: 'loose skirt', image: '/images/baggyskirt.jpeg', category: categories[1], price: 135},
    {name: 'red dress', image: '/images/red.jpeg', category: categories[1], price: 255},
    {name: 'loose fit shirt', image: '/images/tight.jpeg', category: categories[0], price: 100},
    {name: 'baggy fit shirt', image: '/images/loose-fit.jpeg', category: categories[0], price: 200},
    {name: 'tight fit shirt', image: '/images/tight.jpeg', category: categories[0], price: 395},
    {name: 'dress', image: '/images/baggyskirt.jpeg', category: categories[1], price: 145},
    {name: 'loose skirt', image: '/images/baggyskirt.jpeg', category: categories[1], price: 135},
    {name: 'red dress', image: '/images/red.jpeg', category: categories[1], price: 255},
    {name: 'loose fit shirt', image: '/images/tight.jpeg', category: categories[0], price: 100},
    {name: 'baggy fit shirt', image: '/images/loose-fit.jpeg', category: categories[0], price: 200},
    {name: 'tight fit shirt', image: '/images/tight.jpeg', category: categories[0], price: 395},
    {name: 'dress', image: '/images/baggyskirt.jpeg', category: categories[1], price: 145},
    {name: 'loose skirt', image: '/images/baggyskirt.jpeg', category: categories[1], price: 135},
    {name: 'red dress', image: '/images/red.jpeg', category: categories[1], price: 255},
    {name: 'loose fit shirt', image: '/images/tight.jpeg', category: categories[0], price: 100},
    {name: 'baggy fit shirt', image: '/images/loose-fit.jpeg', category: categories[0], price: 200},
    {name: 'tight fit shirt', image: '/images/tight.jpeg', category: categories[0], price: 395},
    {name: 'dress', image: '/images/baggyskirt.jpeg', category: categories[1], price: 145},
    {name: 'loose skirt', image: '/images/baggyskirt.jpeg', category: categories[1], price: 135},
    {name: 'red dress', image: '/images/red.jpeg', category: categories[1], price: 255},
    {name: 'loose fit shirt', image: '/images/tight.jpeg', category: categories[0], price: 100},
    {name: 'baggy fit shirt', image: '/images/loose-fit.jpeg', category: categories[0], price: 200},
    {name: 'tight fit shirt', image: '/images/tight.jpeg', category: categories[0], price: 395},
    {name: 'dress', image: '/images/baggyskirt.jpeg', category: categories[1], price: 145},
    {name: 'loose skirt', image: '/images/baggyskirt.jpeg', category: categories[1], price: 135},
    {name: 'red dress', image: '/images/red.jpeg', category: categories[1], price: 255},
    {name: 'loose fit shirt', image: '/images/tight.jpeg', category: categories[0], price: 100},
    {name: 'baggy fit shirt', image: '/images/loose-fit.jpeg', category: categories[0], price: 200},
    {name: 'tight fit shirt', image: '/images/tight.jpeg', category: categories[0], price: 395},
    {name: 'dress', image: '/images/baggyskirt.jpeg', category: categories[1], price: 145},
    {name: 'loose skirt', image: '/images/baggyskirt.jpeg', category: categories[1], price: 135},
    {name: 'red dress', image: '/images/red.jpeg', category: categories[1], price: 255},
    {name: 'loose fit shirt', image: '/images/tight.jpeg', category: categories[0], price: 100},
    {name: 'baggy fit shirt', image: '/images/loose-fit.jpeg', category: categories[0], price: 200},
    {name: 'tight fit shirt', image: '/images/tight.jpeg', category: categories[0], price: 395},
    {name: 'dress', image: '/images/baggyskirt.jpeg', category: categories[1], price: 145},
    {name: 'loose skirt', image: '/images/baggyskirt.jpeg', category: categories[1], price: 135},
    {name: 'red dress', image: '/images/red.jpeg', category: categories[1], price: 255},
  ]);

  console.log(products)

  process.exit();

})();

