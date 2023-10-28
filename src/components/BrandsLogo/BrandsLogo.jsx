import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Brands } from "..//../utilities/BrandsLogo";

export default function BrandsLogo() {
  return (
    <>
      <div className="bg-custom-tan pt-16 pb-16">
        <h1 className="text-3xl font-bold font-serif-display mb-4 text-white">
          As Seen On
        </h1>
        <section className="bg-custom-gray ">
          <Container className="p-5">
            <div className="flex overflow-x-auto scrollbar-none -webkit-overflow-scrolling-touch">
              {Brands.map((brand) => (
                <div key={brand.id} className="flex-shrink-0 mx-2 px-5">
                  <Link to="/">
                    <img
                      alt=""
                      src={brand.src}
                      className="w-36 h-auto mb-10 mt-10"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
