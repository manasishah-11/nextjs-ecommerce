import QuantityInput from "@/components/common/quantity_input";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";

type CartItemProps = {
  title: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
  imgSrc: string;
};

function CartItem({
  title,
  size,
  color,
  price,
  quantity,
  imgSrc,
}: CartItemProps) {
  return (
    <div className="flex justify-between gap-3 h-[124px]">
      <div className="bg-background rounded-[20px] p-2 flex items-center justify-center h-full w-[124px]">
        <Image src={imgSrc} alt={title} height={124} width={124} />
      </div>
      <div className="flex-grow h-full flex flex-col justify-between">
        <div className="flex flex-col">
          <h3 className="text-black text-[20px] font-semibold">{title}</h3>
          <span className="text-black/60 text-[13px] font-light">{`Size: ${size}`}</span>
          <span className="text-black/60 text-[13px] font-light">{`Color: ${color}`}</span>
        </div>
        <h3 className="text-black text-[20px] font-semibold">{`₹${price}`}</h3>
      </div>
      <div className="h-full flex flex-col justify-between items-end">
        <button className="h-8 w-8 rounded-full hover:bg-black/5 transition-all duration-200 cursor-pointer flex justify-center items-center">
          <Trash2 className="text-[#FF3333]" size={18} />
        </button>
        <QuantityInput quantity={quantity} className="w-[126px]" />
      </div>
    </div>
  );
}

export default CartItem;
