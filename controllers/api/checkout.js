const Order = require('../../models/order');
const User = require('../../models/user');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function createSession(req, res) {
    try {
     // Assuming the user ID is stored in the _id field of req.user
      const order = await Order.getCart(); // Retrieve the cart/order from the database
  
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'Total',
              },
              unit_amount: 20000 // Multiply the order total by 100 to convert it to cents
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
      });
  
      res.redirect(303, session.url);
    } catch (error) {
      console.error(error);
      res.status(500).send('Failed to create session');
    }
  }
  


const success = async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  const customer = await stripe.customers.retrieve(session.customer);

  res.send(`<html><body><h1>Thanks for your order, ${customer.name}!</h1></body></html>`);
}
module.exports = {
  createSession,
  success
};
