import React from "react";


const ProductCard = ({ image, title, description, price, onOrder }) => {
  return (
    <div className="max-w-auto overflow-hidden mb-10">
      
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full object-cover"
      />

      {/* Content */}
      <div className="bg-[#f5efe6] border border-amber-400 text-center py-6 px-4">
        <h2 className="text-[22px] font-playfair font-semibold text-[#5a3e2b]">
          {title}
        </h2>

        <p className="font-playfair mt-2">
          {description}
        </p>

        <p className="text-lg font-bold font-playfair mt-2 text-[#5a3e2b]">
          {price}
        </p>

        {/* Button */}
        <button
          onClick={onOrder}
          className="mt-2 font-playfair bg-[#e6a34a] hover:bg-[#d8923c] text-white font-medium px-6 py-2 rounded-full transition"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;