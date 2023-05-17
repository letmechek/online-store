import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Cancel = () => {
  return (
    <Box sx={{ mt: 4,margin:'20%' }}>
      <Container maxWidth="sm">
        <Typography variant="h5" sx={{ mb: 2 }}>
          Order Cancelled
        </Typography>
        <Typography sx={{ mb: 2 }}>
          We're sorry to hear that your order has been cancelled.
        </Typography>
       
        <Button variant="contained" color="primary" sx={{ mr: 1,backgroundColor:'black' }}>
        <Link to='/' style={{color:'white'}}>
        Return Home
        </Link>
        </Button>
        <Button variant="outlined"sx={{color: 'black', borderColor:'black'}}>Contact Support</Button>
      </Container>
    </Box>
  );
};

export default Cancel;
