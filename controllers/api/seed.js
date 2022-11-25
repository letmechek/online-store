const Product = require('../../models/product');
const data = require('../../data');

module.exports = {
    index
}

async function index(req,res){
        await Product.remove({});
        const createdProducts = await Product.insertMany(data.products);
        console.log(createdProducts)
        res.json({ createdProducts });
      
}