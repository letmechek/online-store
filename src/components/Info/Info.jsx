import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SubBanner1 from "../../Assets/Images/men.avif.avif";
import SubBanner2 from "../../Assets/Images/woman.avif.avif";
import SubBanner3 from "../../Assets/Images/baby.avif.avif";
import "./Info.css";
export default function Info() {
    return (
        <>
            <section className="watchesTypes bg-custom-tan">
      <h1 className="text-center text-gray-700 text-2xl font-bold pt-4">SHOP BY BRAND</h1>
      <Container className="p-5">
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/products" className="relative overflow-hidden group">
            <img src={SubBanner1} className="w-full h-auto transform transition-transform duration-300 group-hover:scale-105" alt="" />
            <div className="hidden absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 text-white group-hover:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <span className="text-2xl font-bold">Shop Man</span>
            </div>
          </Link>
          <Link to="/products" className="relative overflow-hidden group">
            <img src={SubBanner2} className="w-full h-auto transform transition-transform duration-300 group-hover:scale-105" alt="" />
            <div className="hidden absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 text-white group-hover:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <span className="text-2xl font-bold">Shop Woman</span>
            </div>
          </Link>
          <Link to="/products" className="relative overflow-hidden group">
            <img src={SubBanner3} className="w-full h-auto transform transition-transform duration-300 group-hover:scale-105" alt="" />
            <div className="hidden absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 text-white group-hover:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <span className="text-2xl font-bold">Shop Baby</span>
            </div>
          </Link>
        </div>
      </Container>
    </section>
        </>
      );
}
