
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
    {name: 'Blue striped polo shirt', image: '/images/1m.jpg', category: categories[0], price: 100},
    {name: 'Black leather jacket', image: '/images/2m.jpg', category: categories[0], price: 200},
    {name: 'Brown suede loafers', image: '/images/3m.jpg', category: categories[0], price: 395},
    {name: 'Red plaid flannel shirt', image: '/images/4m.jpg', category: categories[0], price: 100},
    {name: 'White athletic sneakers', image: '/images/5m.jpg', category: categories[0], price: 200},
    {name: 'Charcoal wool overcoat', image: '/images/6m.jpg', category: categories[0], price: 395},
    {name: 'Olive cargo pants', image: '/images/7m.jpg', category: categories[0], price: 100},
    {name: 'Tan suede desert boots', image: '/images/8m.jpg', category: categories[0], price: 200},
    {name: 'Gray crewneck sweatshirt', image: '/images/9m.jpg', category: categories[0], price: 395},
    {name: 'Black skinny jeans', image: '/images/10m.jpg', category: categories[0], price: 100},
    {name: 'Brown leather dress shoes', image: '/images/11m.jpg', category: categories[0], price: 200},
    {name: 'Maroon cashmere sweater', image: '/images/12m.jpg', category: categories[0], price: 395},
    {name: 'Blue denim jacket', image: '/images/13m.jpg', category: categories[0], price: 100},
    {name: 'Green camouflage cargo shorts', image: '/images/14m.jpg', category: categories[0], price: 200},
    {name: 'White linen button-up shirt', image: '/images/15m.jpg', category: categories[0], price: 395},
    {name: 'Gray knit beanie', image: '/images/16m.jpg', category: categories[0], price: 100},
    {name: 'Brown aviator sunglasses', image: '/images/17m.jpg', category: categories[0], price: 200},
    {name: 'Burgundy corduroy blazer', image: '/images/18m.jpg', category: categories[0], price: 395},
    {name: 'Black leather boots', image: '/images/19m.jpg', category: categories[0], price: 100},
    {name: 'Light blue chambray shirt', image: '/images/20m.jpg', category: categories[0], price: 200},
    {name: 'Dark wash denim jeans', image: '/images/21m.jpg', category: categories[0], price: 395},
    {name: 'Green cargo jacket', image: '/images/22m.jpg', category: categories[0], price: 100},
    {name: 'Striped wool scarf', image: '/images/23m.jpg', category: categories[0], price: 200},
    {name: 'Navy chinos', image: '/images/24m.jpg', category: categories[0], price: 395},
    {name: 'Plaid fedora hat', image: '/images/25m.jpg', category: categories[0], price: 100},
    {name: 'Beige trench coat', image: '/images/26m.jpg', category: categories[0], price: 200},
    {name: 'Checkered Vans sneakers', image: '/images/27m.jpg', category: categories[0], price: 395},
    {name: 'Gray herringbone blazer', image: '/images/tight.jpeg', category: categories[0], price: 100},
    {name: 'baggy fit shirt', image: '/images/loose-fit.jpeg', category: categories[0], price: 200},
    {name: 'tight fit shirt', image: '/images/tight.jpeg', category: categories[0], price: 395},
    {name: 'Pink floral sundress', image: '/images/1w.jpg', category: categories[1], price: 145},
    {name: 'Black leather ankle boots', image: '/images/2w.jpg', category: categories[1], price: 135},
    {name: 'Gray knit cardigan', image: '/images/3w.jpg', category: categories[1], price: 255},
    {name: 'Burgundy velvet blazer', image: '/images/4w.jpg', category: categories[1], price: 145},
    {name: 'Blue chambray shirt dress', image: '/images/5w.jpg', category: categories[1], price: 135},
    {name: 'White low-top sneakers', image: '/images/6w.jpeg', category: categories[1], price: 255},
    {name: 'Black high-waisted leggings', image: '/images/7w.jpg', category: categories[1], price: 145},
    {name: 'Cream cable knit sweater', image: '/images/8w.jpg', category: categories[1], price: 135},
    {name: 'Olive cargo pants', image: '/images/9w.jpg', category: categories[1], price: 255},
    {name: 'Beige suede ankle boots', image: '/images/10w.jpeg', category: categories[1], price: 145},
    {name: 'Red plaid flannel shirt', image: '/images/11w.jpeg', category: categories[1], price: 135},
    {name: 'Denim cutoff shorts', image: '/images/13w.jpeg', category: categories[1], price: 255},
    {name: 'Tan leather crossbody bag', image: '/images/14w.jpeg', category: categories[1], price: 145},
    {name: 'Striped boatneck tee', image: '/images/15w.jpeg', category: categories[1], price: 135},
    {name: 'Navy trench coat', image: '/images/16w.jpeg', category: categories[1], price: 255},
    {name: 'Brown suede ankle boots', image: '/images/17w.jpeg', category: categories[1], price: 145},
    {name: 'Yellow silk blouse', image: '/images/18w.jpeg', category: categories[1], price: 135},
    {name: 'Green cargo jacket', image: '/images/19w.jpeg', category: categories[1], price: 255},
    {name: 'Brown leather tote bag', image: '/images/20w.jpeg', category: categories[1], price: 145},
    {name: 'Black skinny jeans', image: '/images/21w.jpeg', category: categories[1], price: 135},
    {name: 'White lace-up oxford shoes', image: '/images/22w.jpeg', category: categories[1], price: 255},
    {name: 'Gray wool coat', image: '/images/23w.jpeg', category: categories[1], price: 145},
    {name: 'Striped wide-leg pants', image: '/images/24w.jpeg', category: categories[1], price: 135},
    {name: 'Camel-colored cashmere scarf', image: '/images/25w.jpeg', category: categories[1], price: 255},
    {name: 'Floral print midi skirt', image: '/images/26w.jpeg', category: categories[1], price: 145},
    {name: 'Burgundy fedora hat', image: '/images/27w.jpeg', category: categories[1], price: 145},
    {name: 'Pink wool beret', image: '/images/28w.jpeg', category: categories[1], price: 135},
    {name: 'Gray turtleneck sweater dress', image: '/images/28w.jpeg', category: categories[1], price: 255},
    {name: 'loose skirt', image: '/images/baggyskirt.jpeg', category: categories[1], price: 135},
    {name: 'red dress', image: '/images/red.jpeg', category: categories[1], price: 255},
  ]);

  console.log(products)

  process.exit();

})();

