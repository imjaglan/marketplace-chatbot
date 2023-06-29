"use client";
import React, { useState, FC } from "react";
import Image from "next/dist/client/image";
import { StarIcon } from "@heroicons/react/solid";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
// import CurrencyFormat from "react-currency-format";
const Product: FC<ProductProps> = ({
  id,
  title,
  price,
  description,
  category,
  image,
}) => {
  const MAX_RATING = 5;
  const MIN_RATING = 1;
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col  m-5 bg-white z-30 p-10">
      <h2 className="absolute top-2 right-2 text-xs italic text-gray-400 ">
        {category}
      </h2>
      <Image
        src={image}
        alt="product"
        height={200}
        width={200}
        // objectFit="contain"
        className="h-60 w-60"
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill(1 - 2)
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500 " />
          ))}
      </div>

      <div className="text-xs my-2  line-clamp-2">{description}</div>

      <div className="mb-5">
        {/* <CurrencyFormat value={price} displayType={"text"} prefix={"$"} /> */}
        <div>${price}</div>
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img src="https://links.papareact.com/fdw" className="w-12" />
          <h2 className="text-xs  text-gray-500">FREE Next-day Delivery</h2>
        </div>
      )}
      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
};

export default Product;
