"use client";

import React from "react";
import Image from "next/image";
import Rating from "./rating";

type ProductCardProps = {
  title: string;
  image: string;
  price: number;
  rating: number;
  onClick?: () => void;
};

function ProductCard({
  title,
  image,
  price,
  rating,
  onClick = () => {},
}: ProductCardProps) {
  return (
    <div
      className="w-min-[332px] w-full flex flex-col gap-2 cursor-pointer hover:scale-[1.02] transition-all duration-200 ease-in-out p-4 hover:shadow-md rounded-[20px]"
      onClick={onClick}
    >
      <div className="bg-background rounded-[20px] p-4 h-[300px] flex justify-center items-center">
        <Image
          src={image}
          alt={title}
          width={250}
          height={250}
          className="h-auto w-auto aspect-auto"
        />
      </div>
      <h3 className="text-black text-[20px] font-semibold">{title}</h3>
      <Rating rating={rating} />
      <h3 className="text-black text-[20px] font-semibold">{`₹${price}`}</h3>
    </div>
  );
}

export default ProductCard;
