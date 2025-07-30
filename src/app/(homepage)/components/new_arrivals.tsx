import ProductCard from "@/components/product_card";
import React from "react";

const new_arrivals = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    price: 799,
    rating: 4.5,
    image: "/products/product1.png",
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    price: 1399,
    rating: 3.5,
    image: "/products/product2.png",
  },
  {
    id: 3,
    name: "Checkered Shirt",
    price: 999,
    rating: 4.5,
    image: "/products/product3.png",
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    price: 1199,
    rating: 4.5,
    image: "/products/product4.png",
  },
];

function NewArrivals() {
  return (
    <div className="flex justify-center px-4">
      <div className="max-w-[1240px] w-[1240px] py-8 flex flex-col gap-5">
        <h2 className="text-black text-3xl font-bold text-center">
          NEW ARRIVALS
        </h2>
        <div className="grid grid-cols-4 gap-5">
          {new_arrivals.map((product) => (
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

export default NewArrivals;
