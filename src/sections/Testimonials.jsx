import React, { useState } from "react";
import user1 from "../assests/user1.jpg";
import user2 from "../assests/user2.jpg";
import user3 from "../assests/user3.jpg";

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      name: "Harry Thomas",
      role: "Project Manager",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
      image: user1,
    },
    {
      name: "Jonny Thomas",
      role: "Project Manager",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
      image: user2,
    },
    {
      name: "David Smith",
      role: "Project Manager",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
      image: user3,
    },
  ];

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="py-20 px-24 text-center">
      
      {/* Heading SAME */}
      <h2 className="text-[54px] text-amber-900 font-playfair font-bold mb-2">
        Our coffee perfection feedback
      </h2>

      <p className="text-xl mb-12 font-playfair text-stone-500">
        Our customers has amazing things to say about us
      </p>

      {/* Card */}
      <div className="relative max-w-5xl mx-auto border border-amber-200 bg-[#f5f1ec] px-10 py-14">
        
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-[-30px] top-1/2 -translate-y-1/2 bg-amber-400 w-12 h-12 flex items-center justify-center rounded-md shadow-md"
        >
          ←
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-[-30px] top-1/2 -translate-y-1/2 bg-amber-400 w-12 h-12 flex items-center justify-center rounded-md shadow-md"
        >
          →
        </button>

        {/* Quote */}
        <div className="text-6xl text-amber-900 mb-4">“</div>

        {/* Text */}
        <p className="text-stone-600 font-semibold text-lg font-playfair max-w-2xl mx-auto transition-all duration-500">
          {testimonials[index].text}
        </p>

        {/* Name */}
        <h3 className="mt-8 text-[32px] font-bold text-amber-900 font-playfair">
          {testimonials[index].name}
        </h3>

        {/* Role */}
        <p className="text-stone-500 text-xl font-playfair">
          {testimonials[index].role}
        </p>

        {/* Image */}
        <div className="absolute left-[46%] mt-6">
          <img
            src={testimonials[index].image}
            alt="user"
            className="w-20 h-20 rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;