const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productSchema = require('./productSchema')

const lineItemSchema = new Schema({
    qty: { type: Number, default: 1 },
    product: productSchema
}, {
    // timestamps: true,
    toJSON: { virtuals: true }
})

lineItemSchema.virtual('extPrice').get(function() {
    return this.product && this.product.price ? this.qty * this.product.price : 0;
})

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    lineItems: [lineItemSchema],
    isPaid: { type: Boolean, default: false }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})

orderSchema.virtual('orderTotal').get(function() {
    return this.lineItems.reduce((total, product) => total + product.extPrice, 0)
})

orderSchema.virtual('totalQty').get(function() {
    return this.lineItems.reduce((total, product) => total + product.qty, 0)
})

orderSchema.virtual('orderId').get(function() {
    return this.id.slice(-6).toUpperCase()
})

orderSchema.statics.getCart = function(userId) {
    return this.findOneAndUpdate(
        { user: userId, isPaid: false },
        { user: userId },
        { upsert: true, new: true }
    )
}

orderSchema.methods.addItemToCart = async function(productId) {
    const cart = this
    const lineItem = cart.lineItems.find(lineItem => lineItem.product._id.equals(productId))
    if(lineItem) {
        lineItem.qty += 1
    } else {
        const product = await mongoose.model('Product').findById(productId)
        cart.lineItems.push({ product })
    }
    return cart.save()
}

orderSchema.methods.setItemQty = function(productId, newQty) {
    const cart = this
    const lineItem = cart.lineItems.find(lineItem => lineItem.product._id.equals(productId))
    if(lineItem && newQty <= 0) {
        lineItem.remove()
    } else if(lineItem){
        lineItem.qty = newQty
    }

    return cart.save()
}

module.exports = mongoose.model('Order', orderSchema)