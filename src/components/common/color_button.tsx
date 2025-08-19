"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React from "react";

type ColorButtonProps = {
  className: string;
  selected?: boolean;
  onClick?: () => void;
};

function ColorButton({
  className,
  selected = false,
  onClick = () => {},
}: ColorButtonProps) {
  return (
    <div
      className={cn(
        "rounded-full h-10 w-10 cursor-pointer hover:opacity-50 transition-opacity duration-200 relative flex justify-center items-center border border-black/10",
        className
      )}
      onClick={onClick}
    >
      {selected && (
        <div className="absolute inset-0 bg-black/50 rounded-full" />
      )}
      {selected && <Check className="brightness-0 invert" size={20} />}
    </div>
  );
}

export default ColorButton;
