import  React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Grid, Typography,} from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css'
import Banner from '../../components/Banner/Banner';
import Info from '../../components/Info/Info';

export default function Home() {
  return (
    <>
    <Banner />
    <Info />
    </>
  )
}

