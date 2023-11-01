import React from "react";
import "./Home.css";
import Banner from '../../components/Banner/Banner';
import Info from '../../components/Info/Info';
import Featured from '../../components/Featured/Featured';
import coupon from "../../Assets/Images/coupon.png";
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
        className="bg-custom-tan w-full object-contain "
        style={{ maxHeight: "600px" }}
      />
      <BrandsLogo />
      <Featured />
      <Testimonials />
    </>
  );
}
