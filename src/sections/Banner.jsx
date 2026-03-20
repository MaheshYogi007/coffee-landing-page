import React from "react";
import banner from "../assests/banner.png";

const Banner = () => {
  return (
    <div className="h-screen relative">
      {/* Banner Image */}
      <img
        src={banner}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-24">
        <div>
          <p className="text-xl font-playfair text-white">We’ve got your morning covered with</p>
          <h1 className="text-[12rem] font-clicker text-white">Coffee</h1>
          <p className="max-w-md font-playfair mb-4 text-white">
            It is best to start your day with a cup of coffee. Discover the
            best flavours coffee you will ever have. We provide the best
            for our customers.
          </p>
          <button className="bg-yellow-400 font-playfair text-black font-bold px-6 py-2 rounded-full">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;