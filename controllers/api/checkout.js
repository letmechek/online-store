const Order = require('../../models/order');
const User = require('../../models/user');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function makePayment(req, res) {
    try {
  
      const session = await stripe.checkout.sessions.create({
        line_items: [
            {
              price_data: {
                currency: 'usd',
                product_data: {
                  name: 'Total',
                },
                unit_amount: 200 * 100, // Use the order total from the retrieved order and multiply by 100 to convert to cents
              },
              quantity: 1,
            },
          ],
          
        mode: 'payment',
        success_url: 'https://sams-streetwear.herokuapp.com/success',
        cancel_url: 'https://sams-streetwear.herokuapp.com/cancel',
      });
  
      res.redirect(303, session.url);
    } catch (error) {
      console.error(error);
      res.status(500).send('Failed to create session');
    }
  }

// const makePayment = async (req, res) => {
// 	const KEY = process.env.STRIPE_KEY
// 	const stripe = require('stripe')(KEY)

// 	stripe.charges.create(
// 		{
// 			source: req.body.tokenId,
// 			amount: req.body.amount,
// 			currency: 'usd',
// 		},
// 		(stripeErr, stripeRes) => {
// 			if (stripeErr) {
// 				res.status(500).json(stripeErr)
// 			} else {
// 				res.status(200).json(stripeRes)
// 			}
// 		}
// 	)
// } 
  


const success = async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  const customer = await stripe.customers.retrieve(session.customer);

  res.send(`<html><body><h1>Thanks for your order, ${customer.name}!</h1></body></html>`);
}
module.exports = {
  makePayment,
  success
};
