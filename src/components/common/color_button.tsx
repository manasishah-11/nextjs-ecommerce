"use client";

import { cn } from "@/lib/utils";
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
        "rounded-full h-10 w-10 cursor-pointer hover:opacity-50 transition-opacity duration-200",
        className
      )}
      onClick={onClick}
    />
  );
}

export default ColorButton;
