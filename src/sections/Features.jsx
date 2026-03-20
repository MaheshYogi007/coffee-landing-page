import React from "react";
import blast_right from "../assests/coffee_blast_right.png";
import cappuccino from "../assests/cappuccino.png";
import beans from "../assests/coffee-beans_icon.png";
import badge from "../assests/badge_icon.png";
import coffee_cup from "../assests/coffee_cup_icon.png";
import affordable from "../assests/best_price_icon.png";
import InfoCard from "../components/Card/InfoCard";

const products = [
  {
    title: "Cappuccino",
    description: "Coffee 50% | Milk 50%",
    icon: beans,
  },
  {
    title: "Chai Latte",
    description: "Coffee 30% | Milk 70%",
    icon: badge,
  },
  {
    title: "Macchiato",
    description: "Coffee 30% | Milk 70%",
    icon: coffee_cup,
  },
  {
    title: "Expresso",
    description: "Coffee 30% | Milk 70%",
    icon: affordable,
  },
];

const Features = () => {
  return (
    <div className="relative my-20">
      <img src={blast_right} className="absolute right-0 -top-32" />

      <div className="px-24 text-center">
        <h2 className="text-[54px] text-amber-900 font-playfair font-bold mb-2">
          Why are we different?
        </h2>

        <p className="text-xl mb-12 font-playfair text-stone-500">
          We don’t just make your coffee, we make your day!
        </p>

        <div className="grid md:grid-cols-4 gap-12 mt-5">
          {products.map((item, index) => (
            <InfoCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <div className="mt-8">
          <p className="text-xl mb-2 font-playfair text-stone-500">
            Great ideas start with great coffee, Lets help you achieve that
          </p>
          <h2 className="text-3xl text-amber-900 font-playfair font-bold mb-4">
            Get started today.
          </h2>

          <button className="bg-yellow-400 font-playfair text-black font-bold px-6 py-2 rounded-full">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
