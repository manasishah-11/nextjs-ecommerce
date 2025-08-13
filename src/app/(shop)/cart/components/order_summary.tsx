import { MoveRight, Tag } from "lucide-react";
import React from "react";

function OrderSummary() {
  return (
    <div className="border border-black/10 rounded-[20px] p-5 flex flex-col gap-4">
      <h3 className="text-black text-[22px] font-semibold">Order Summary</h3>
      <div className="flex justify-between items-center gap-2">
        <span className="text-black/60 text-[16px]">Subtotal</span>
        <h3 className="text-black font-semibold text-[16px]">₹3797</h3>
      </div>
      <div className="flex justify-between items-center gap-2">
        <span className="text-black/60 text-[16px]">Discount</span>
        <h3 className="text-[#FF3333] font-semibold text-[16px]">-₹149</h3>
      </div>
      <div className="flex justify-between items-center gap-2">
        <span className="text-black/60 text-[16px]">Delivery Fee</span>
        <h3 className="text-black font-semibold text-[16px]">₹42</h3>
      </div>
      <hr className="border-black/10" />
      <div className="flex justify-between items-center gap-2">
        <span className="text-black text-[18px]">Total</span>
        <h3 className="text-black font-semibold text-[18px]">₹3690</h3>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-grow relative">
          <Tag
            size={20}
            className="text-black/10 absolute left-3 top-1/2 -translate-y-1/2"
          />
          <input
            className="rounded-full w-full bg-background py-3 pl-10 pr-6 text-sm font-light"
            placeholder="Apply promo code"
          />
        </div>
        <div>
          <button className="py-2.5 rounded-full w-[120px] bg-black text-white cursor-pointer text-sm hover:scale-[1.01] transition-transform duration-200">
            Apply
          </button>
        </div>
      </div>
      <button className="py-3 rounded-full w-full bg-black text-white cursor-pointer text-sm hover:scale-[1.01] transition-transform duration-200 flex justify-center items-center gap-2 font-semibold">
        <span>Go to checkout</span>
        <MoveRight className="text-white" size={18} />
      </button>
    </div>
  );
}

export default OrderSummary;
