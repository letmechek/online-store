const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const reviewSchema = new Schema({
//     name: { type: String, required: true },
//     comment: { type: String, required: true },
//     rating: { type: Number, required: true },
//   },
//   {
//     timestamps: true,
// })

const productSchema = new Schema({
    name: { type: String, required: true, unique: true },
    pid: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    // reviews: [reviewSchema],
  },
  {
    timestamps: true,
})

module.exports = mongoose.model('Product', productSchema)