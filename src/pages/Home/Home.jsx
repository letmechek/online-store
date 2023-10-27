import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Grid, Typography,} from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css'

const HeroSection = styled('div')({
  backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmclMjBzdG9yZSUyMHdlYnNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60)',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  height: 'calc(100vh - 64px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const HeroTitle = styled(Typography)({
  color: '#ffffff',
  textAlign: 'center',
  marginBottom: '16px',
});

const ImageSection = styled('div')({
  height: 'calc(100vh - 64px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const CtaButton = styled(Button)({
  margin: '16px 0',
});

const Home = () => {
  
  return (
    <div style={{paddingBottom:'15px'}}>
     
         <h1 className='head'>Sams <br/> StreetWear</h1>
         
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <HeroSection>
            <div>
              <HeroTitle variant="h1" style={{fontFamily: 'Londrina Shadow'}}>
               50% SALE
              </HeroTitle>
              <Link to="/products">
              <CtaButton variant="contained" color="primary" size="large" style={{backgroundColor:'black'}}>
              Shop Now
              </CtaButton>
              </Link>
            </div>
          </HeroSection>
        </Grid>
        <Grid item xs={12} md={4}>
          <ImageSection style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoaW5nJTIwc3RvcmUlMjBzaG93JTIwbm93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60)' }}>
          <Link to="/products">
            <CtaButton variant="contained" color="primary" size="large" style={{backgroundColor:'black'}}>
              Shop Now
            </CtaButton>
            </Link>
          </ImageSection>
        </Grid>
        <Grid item xs={12} md={4}>
          <ImageSection style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1509319117193-57bab727e09d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmclMjBzdG9yZSUyMHdlYnNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60)' }}>
          <Link to="/products">
            <CtaButton variant="contained" color="primary" size="large" style={{backgroundColor:'black'}}>
              Shop Now
            </CtaButton>
            </Link>
          </ImageSection>
        </Grid>
        <Grid item xs={12} md={4}>
          <ImageSection style={{backgroundSize: 'contain', backgroundImage: 'url(https://images.unsplash.com/photo-1474128670149-7082a8d370ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoaW5nJTIwc3RvcmUlMjB3ZWJzaXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60)' }}>
          <Link to="/products">
            <CtaButton variant="contained" color="primary" size="large" style={{backgroundColor:'black'}}>
              Shop Now
            </CtaButton>
            </Link>
          </ImageSection>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
