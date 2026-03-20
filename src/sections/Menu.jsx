import React from "react";
import blast from "../assests/coffee_blast.png";
import cappuccino from "../assests/cappuccino.png";
import chai from "../assests/chai.png";
import macchiato from "../assests/macchiato.png";
import expresso from "../assests/expresso.png";
import ProductCard from "../components/Card/ProductCard";

const products = [
  {
    title: "Cappuccino",
    description: "Coffee 50% | Milk 50%",
    price: "$8.50",
    image: cappuccino,
  },
  {
    title: "Chai Latte",
    description: "Coffee 30% | Milk 70%",
    price: "$7.00",
    image: chai,
  },
  {
    title: "Macchiato",
    description: "Coffee 30% | Milk 70%",
    price: "$7.50",
    image: macchiato,
  },
  {
    title: "Expresso",
    description: "Coffee 30% | Milk 70%",
    price: "8.00",
    image: expresso,
  },
];

const Menu = () => {
  return (
    <div>
      <img src={blast} className="w-auto" />

      <div className="px-24 text-center">
        <h2 className="text-[54px] text-amber-900 font-playfair font-bold mb-2">
          Enjoy a new blend of coffee style
        </h2>

        <p className="text-xl mb-12 font-playfair text-stone-500">
          Explore all flavours of coffee with us. There is always a new cup
          worth experiencing
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-5">
          {products.map((item, index) => (
            <ProductCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
