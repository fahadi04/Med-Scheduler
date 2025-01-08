import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ----Left Section---- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima in
            non iste sit perspiciatis similique soluta quod rerum quis
            obcaecati, corporis ex saepe facere, maiores asperiores temporibus
            labore, tempore ipsa.
          </p>
        </div>
        {/* -----Center Section---- */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* ----Right Section---- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 7563987828</li>
            <li>masroorfahad2704@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* -----Copyright Section---- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center text-sm font-md">
          Copyright © 2024 - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;