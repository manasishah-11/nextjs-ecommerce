import ColorButton from "@/components/common/color_button";
import QuantityInput from "@/components/common/quantity_input";
import Rating from "@/components/common/rating";
import SizeButton from "@/components/common/size_button";
import React from "react";

const colors = [
  { id: "brown", className: "bg-[#4F4631]" },
  { id: "green", className: "bg-[#314F4A]" },
  { id: "blue", className: "bg-[#31344F]" },
];

export const sizes = [
  { id: "s", name: "Small" },
  { id: "m", name: "Medium" },
  { id: "l", name: "Large" },
  { id: "xl", name: "X-Large" },
];

function ProductSummary() {
  return (
    <div className="flex flex-col gap-3 justify-between min-h-full">
      <div className="flex flex-col gap-1">
        <h1 className="text-[40px] text-black font-extrabold uppercase">
          One Life Graphic T-shirt
        </h1>
        <Rating rating={4.5} />
        <div className="flex items-center gap-4">
          <h2 className="font-semibold text-[32px] text-black">₹559</h2>
          <h2 className="font-semibold text-[32px] text-black/30 line-through">
            ₹649
          </h2>
          <div className="rounded-full py-1 px-4 flex justify-center items-center bg-[#FF3333]/10 text-[#FF3333] text-[16px]">
            -20%
          </div>
        </div>
        <span className="text-black/60 text-[16px]">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </span>
      </div>
      <hr className="border-black/10" />

      <div className="flex flex-col gap-1">
        <h3 className="text-black/60 text-[16px] font-light">Select Colors</h3>
        {/* TODO: selection of colors */}
        <div className="flex gap-4">
          {colors.map((color) => (
            <ColorButton key={color.id} className={color.className} />
          ))}
        </div>
      </div>
      <hr className="border-black/10" />

      <div className="flex flex-col gap-1">
        <h3 className="text-black/60 text-[16px] font-light">Choose Size</h3>
        {/* TODO: selection of sizes */}
        <div className="flex gap-4">
          {sizes.map((size) => (
            <SizeButton key={size.id} title={size.name} />
          ))}
        </div>
      </div>
      <hr className="border-black/10" />

      <div className="flex items-center gap-3">
        <QuantityInput quantity={1} />
        <button className="flex-grow bg-black rounded-full text-white p-2 text-sm cursor-pointer hover:scale-[1.01] transition-transform duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductSummary;
