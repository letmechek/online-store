import React, { useState } from 'react';
import { IconButton, Badge, Box, Typography, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

import LineItem from '../LineItem/LineItem';

export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  if (!order) return null;

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

  return (
    <nav>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton aria-label="Cart" onClick={handleToggle}sx={{left:'89%',marginTop:'2%'}}>
          <Badge badgeContent={order.totalQty} color="primary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        {navbarOpen && (
          <div className="menuNav1">
            <div>
              <div className="section-heading">
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
                  <Typography variant="body2" className="hungry">
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
