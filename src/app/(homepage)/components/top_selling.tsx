import ProductCard from "@/components/common/product_card";
import React from "react";

const top_selling = [
  {
    id: 1,
    name: "Vertical Stiped Shirt",
    price: 1299,
    rating: 5.0,
    image: "/products/product5.png",
  },
  {
    id: 2,
    name: "Courage Graphic T-shirt",
    price: 799,
    rating: 4.0,
    image: "/products/product6.png",
  },
  {
    id: 3,
    name: "Loose Fit Bermuda Shorts",
    price: 1499,
    rating: 3.0,
    image: "/products/product7.png",
  },
  {
    id: 4,
    name: "Faded Skinny Jeans",
    price: 1599,
    rating: 4.5,
    image: "/products/product8.png",
  },
];

function TopSelling() {
  return (
    <div className="flex justify-center px-4">
      <div className="max-w-[1240px] w-[1240px] py-8 flex flex-col gap-5">
        <h2 className="text-black text-3xl font-bold text-center">
          TOP SELLING
        </h2>
        <div className="grid grid-cols-4 gap-5">
          {top_selling.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              image={product.image}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <button className="bg-transparent text-black px-4 py-1.5 w-[150px] border border-black/20 rounded-full hover:bg-black hover:text-white hover:w-[200px] transition-all duration-200 text-[13px] font-medium cursor-pointer">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopSelling;
