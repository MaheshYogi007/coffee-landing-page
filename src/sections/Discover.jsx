import React from "react";
import beans_cup from "../assests/beans_cup.png"

const Discover = () => {
  return (
    <div className="w-full px-24 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
      <div>
        <h2 className="text-[54px] text-amber-900 font-playfair font-bold mb-4">
          Discover the best coffee
        </h2>
        <p className="text-gray-600 font-playfair max-w-md">
          Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.
        </p>
        <button className="bg-yellow-400 font-playfair mt-6 text-sm text-black px-5 py-2 rounded-full font-medium">Learn More</button>
      </div>

     <div>
      <img src={beans_cup} alt="coffee" />;
     </div>
    </div>
  );
};

export default Discover;