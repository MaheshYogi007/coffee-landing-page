import React from "react";
import logo from "../../assests/logo.png"

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-24 py-6 text-white">
      
      <img src={logo} />

      <ul className="hidden md:flex gap-10">
        <li className="hover:text-yellow-400 font-playfair cursor-pointer">Home</li>
        <li className="hover:text-yellow-400 font-playfair cursor-pointer">Menu</li>
        <li className="hover:text-yellow-400 font-playfair cursor-pointer">About Us</li>
        <li className="hover:text-yellow-400 font-playfair cursor-pointer">Contact Us</li>
      </ul>

      <div className="flex items-center gap-5">
        <button className="underline font-playfair">Sign In</button>
        <button className="bg-yellow-400 font-playfair text-sm text-black px-5 py-2 rounded-full font-medium">
          SignUp
        </button>
      </div>
    </div>
  );
};

export default Navbar;