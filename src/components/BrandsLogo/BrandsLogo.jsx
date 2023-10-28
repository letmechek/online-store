import { Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './BrandsLogo.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {BrandsResponsive} from '../../utilities/BrandsResponsive'
import {Brands}from '..//../utilities/BrandsLogo'

export default function BrandsLogo() {
  return (
    <div>
        <section className="BrandslogoSec boxShadaw ">
      <Container className="p-5">
        <Carousel responsive={BrandsResponsive}>
          {Brands.map(brand => (
          <div className="text-center" key={brand.id}>
            <Link to="/">
              <img alt="" className="img-fluid" src={brand.src} />
            </Link>
          </div>
          ))}
        </Carousel>
      </Container>
    </section>
    </div>
  )
}
