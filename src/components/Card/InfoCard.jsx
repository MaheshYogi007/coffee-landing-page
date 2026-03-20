import React from "react";

const InfoCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center bg-[#fbeedd] p-6 text-center max-w-xs">
      {/* Icon */}
      <img src={icon} alt={title} className="w-auto mb-4" />

      {/* Title */}
      <h2 className="text-[#5a3e2b] font-playfair text-xl font-semibold mb-2">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-500 font-playfair text-sm">
        {description}
      </p>
    </div>
  );
};

export default InfoCard;