import  React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Grid, Typography,} from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css'
import Banner from '../../components/Banner/Banner';
import Info from '../../components/Info/Info';
import Featured from '../../components/Featured/Featured';
import coupon from '../../Assets/Images/coupon.png'
import BrandsLogo from '../../components/BrandsLogo/BrandsLogo';
import Testimonials from '../../components/Testimonials/Testimonials';
export default function Home() {
  return (
    <>
    <Banner />
    <Info />
    <img
      src={coupon}
      alt="home"
      className="w-full h-auto object-contain"
    />
    <BrandsLogo />
    <Featured />
    <Testimonials />
    </>
  )
}

