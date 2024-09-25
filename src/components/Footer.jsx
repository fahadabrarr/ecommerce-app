import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-5">
      <div className="flex flex-col sm:flex-row grid-col-[3fr-1fr-1fr] gap-14 my-10 mt-40 text-sm items-center justify-center w-full   ">
        <div className="mb-5 w-1/3 items-center flex flex-col ">
          <img src={assets.logo} alt="" className="mb-5 w-32 items-center" />
          <p className="w-full md:w-2/3 text-gray-600 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi,
            nulla. Optio quam quod maiores vel!
          </p>
        </div>
        <div className="text-xl font-medium mb-5 w-1/3 items-center">
          <p className="text-center mb-2">COMPANY</p>

          <ul className="flex flex-col gap-1 text-gray-600 items-center ">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="text-xl font-medium mb-5 w-1/3">
          <p className="text-xl font-medium mb-2 text-center">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600 items-center ">
            <li>01723-302-301</li>
            <li>ecommerce@gamil.com</li>
            <li>Dhaka, Mirpur</li>
            <li>Bangladesh</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
