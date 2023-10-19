import React, { useEffect, useState } from 'react';
import { IconButton, Badge, Box, Typography, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import StripeCheckout from 'react-stripe-checkout';
import * as ordersAPI from '../../utilities/orders-api';
import LineItem from '../LineItem/LineItem';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './OrderDetail.css';

export default function OrderDetail({ order, handleChangeQty, handleCheckout,  }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const Navigate = useNavigate()
  
 
  const lineItems = order ? order.lineItems.map((product) => (
    <LineItem
      lineItem={product}
      isPaid={order.isPaid}
      key={product._id}
      handleChangeQty={handleChangeQty}
    />
  )) : null;
  
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };


  
  return (
    <nav >
      <Box sx={{ display: 'flex', alignItems: 'center' }} >
        <IconButton aria-label="Cart" onClick={handleToggle}sx={{left:'89%',marginTop:'2%', zIndex: 11}}>
          <Badge badgeContent={order.totalQty} color="primary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <Box className='order-detail'>
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
                          <Button
                            type="submit"
                            variant="contained"
                            disabled={!lineItems.length}
                            sx={{ backgroundColor: '#ff4081', color: 'white' }}
                            onClick={() => handleCheckout(order._id)}
                          >
                            CHECKOUT
                          </Button>
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
      </Box>
    </nav>
  );
}
