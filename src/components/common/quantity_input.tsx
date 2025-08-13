"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

type QuantityInputProps = {
  quantity: number;
  className?: string;
};

function QuantityInput({ quantity, className = "" }: QuantityInputProps) {
  const [localQuantity, setLocalQuantity] = useState(quantity);
  return (
    <div
      className={cn(
        "bg-background rounded-full p-2 flex items-center justify-between w-[170px] gap-2",
        className
      )}
    >
      <div
        className="cursor-pointer flex justify-center items-center text-black text-sm pl-3 hover:scale-150 transition-transform duration-200"
        onClick={() => setLocalQuantity((prev) => (prev >= 1 ? prev - 1 : 0))}
      >
        -
      </div>
      <div className="flex-grow flex justify-center items-center text-black text-sm">
        {localQuantity}
      </div>
      <div
        className="cursor-pointer flex justify-center items-center text-black text-sm pr-3 hover:scale-150 transition-transform duration-200"
        onClick={() => setLocalQuantity((prev) => prev + 1)}
      >
        +
      </div>
    </div>
  );
}

export default QuantityInput;
