import React from "react";

const Subscribe = () => {
  return (
    <div className="py-20 text-center bg-gray-200">
      <h2 className="text-2xl mb-4">
        Subscribe to get the Latest News
      </h2>

      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Enter your email"
          className="p-2 w-64"
        />
        <button className="bg-yellow-400 px-4">Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;