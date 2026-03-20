import React from "react";
import big_cup from "../assests/big_cup.png";
import middle_banner from "../assests/middle_banner.png";
import banner_layer from "../assests/banner_layer.png"
import middle_coffee_beans from "../assests/middle_coffee_bean.png";

const Promo = () => {
  return (
    <div className="relative py-20 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={middle_banner}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <img
        src={banner_layer}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content */}
      <div className="relative flex flex-col md:flex-row items-center max-w-7xl w-full">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 text-white z-10">
          <h2 className="text-4xl md:text-[54px] font-playfair font-bold mb-4">
            Get a chance to have an Amazing morning
          </h2>
          <p className="mb-6 font-playfair text-lg md:text-xl">
            We are giving you a one time opportunity to experience a better life with coffee.
          </p>
          <button className="bg-yellow-400 font-playfair text-black px-6 py-2 rounded-full font-semibold">
            Order Now
          </button>
        </div>

        {/* Image Section */}
        <div className="relative left-[22%] z-10">
          {/* Coffee cup */}
          <img src={big_cup} alt="Coffee Cup" />
        </div>
      </div>

      {/* Coffee beans overlay */}
          <img
            src={middle_coffee_beans}
            alt="Coffee Beans"
            className="absolute right-0 bottom-0"
          />
    </div>
  );
};

export default Promo;