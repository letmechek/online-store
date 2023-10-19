
const Order = require('../../models/order');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
};

// A cart is the unpaid order for a user
async function cart(req, res) {
  const cart = await Order.getCart(req.user._id)
  res.json(cart)
}


// Add an item to the cart
async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id)
  await cart.addItemToCart(req.params.id)
  res.json(cart)
}

// Updates an item's qty in the cart
async function setItemQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id)
  await cart.setItemQty(req.body.productId, req.body.newQty)
  res.json(cart)
}


async function checkout(req, res) {
  try {
    const { orderId } = req.params;

    // Use the `findOne` method to find the order by its unique ID
    const order = await Order.findOne({ _id: orderId });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    const orderTotalCents = order.orderTotal * 100;

    const lineItems = order.lineItems.map((item) => {
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.product.name,
            // images: [item.product.image],
          },
          unit_amount: item.product.price * 100,
        },
        quantity: item.qty,
      };
    });
    console.log(order.lineItems)

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems, // Use the mapped lineItems array
      mode: 'payment',
      allow_promotion_codes: true,
      success_url: 'https://sams-streetwear.herokuapp.com/success',
      cancel_url: 'https://sams-streetwear.herokuapp.com/cancel',
    });

    res.json({ sessionUrl: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to create session');
  }
}
