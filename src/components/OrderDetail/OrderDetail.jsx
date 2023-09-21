import React, { useEffect, useState } from 'react';
import { IconButton, Badge, Box, Typography, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import LineItem from '../LineItem/LineItem';
import { useNavigate } from 'react-router-dom';

// const KEY = 'pk_test_51Mn7N6AzQHcVF6axcfUSnaT5DYwpyKJLRGKslB6IrZU3D0UBloFiCVh0llcOrxOZcATYQFfYlevXGKou2IhRC4Nu0051R5XXTi'
export default function OrderDetail({ order, handleChangeQty, handleCheckout,  }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  // const [stripeToken, setStripeToken] = useState(null);
  const Navigate = useNavigate()
  
  // useEffect(() => {
	// 	const makeRequest = async () => {
	// 		try {
	// 			const response = await axios.post(
	// 				'http://localhost:3000/api/checkout/payment',
	// 				{
	// 					tokenId: stripeToken.id,
	// 					amount: order.orderTotal.toFixed(2) * 100,
	// 				}
	// 			)
	// 			console.log(response.data)
	// 			Navigate("/success", {
	// 				state: { stripeData: response.data, products: order},
	// 			})
				
	// 		} catch (err) {
	// 			console.log(err)
	// 		}
	// 	}
	// 	stripeToken && makeRequest()
	// }, [stripeToken, order.orderTotal.toFixed(2), Navigate])
  // if (!order) return null;



  const lineItems = order.lineItems.map((product) => (
    <LineItem
      lineItem={product}
      isPaid={order.isPaid}
      key={product._id}
      handleChangeQty={handleChangeQty}
    />
  ));

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  // const onToken = (token) => {
	// 	setStripeToken(token)
	// }
	// console.log(stripeToken)

  
  return (
    <nav>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton aria-label="Cart" onClick={handleToggle}sx={{left:'89%',marginTop:'2%'}}>
          <Badge badgeContent={order.totalQty} color="primary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        {navbarOpen && (
          <div  >
            <div>
              <div >
                {order.isPaid ? (
                  <>
                    <Typography variant="body1">ORDER</Typography>
                    <Typography variant="subtitle2" className="smaller">
                      {order.orderId}
                    </Typography>
                  </>
                ) : (
                  <Typography variant="body1">NEW ORDER</Typography>
                )}
                <Typography variant="body2">
                  {new Date(order.updatedAt).toLocaleDateString()}
                </Typography>
              </div>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
                {lineItems.length ? (
                  <>
                    {lineItems}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', mt: 2 }}>
                      {order.isPaid ? (
                        <Typography variant="body2" sx={{ textAlign: 'right' }}>
                          TOTAL
                        </Typography>
                      ) : (
                        // <StripeCheckout
                          // name="Sams StreetWear"
                          // image="https://i.ibb.co/JxgT8GP/LDA-Logo-Blue2.png"
                          // billingAddress
                          // shippingAddress
                          // description={`Your total is $${order.orderTotal.toFixed(2)}`}
                          // amount={order.orderTotal.toFixed(2) * 100}
                          // token={onToken}
                          // stripeKey={KEY}
                        // >
                        <form action="/create-checkout-session" method="POST">
                          <Button
                            type="submit"
                            variant="contained"
                            disabled={!lineItems.length}
                            sx={{ backgroundColor: '#ff4081', color: 'white' }}
                          >
                            CHECKOUT
                          </Button>
                          </form>
                      // {/* </StripeCheckout> */}
                      )}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <Typography variant="body2">{order.totalQty}</Typography>
                        <Typography variant="body2" sx={{ textAlign: 'right' }}>
                          ${order.orderTotal.toFixed(2)}
                        </Typography>
                      </Box>
                    </Box>
                  </>
                ) : (
                  <Typography variant="body2" className="hungry"sx={{alignItems:'center'}}>
                    Cart is empty?
                  </Typography>
                )}
              </Box>
            </div>
          </div>
        )}
      </Box>
    </nav>
  );
}
