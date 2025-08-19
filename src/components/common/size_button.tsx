"use client";

import { cn } from "@/lib/utils";
import React from "react";

type SizeButtonProps = {
  title: string;
  selected?: boolean;
  onClick?: () => void;
};

function SizeButton({
  title,
  selected = false,
  onClick = () => {},
}: SizeButtonProps) {
  return (
    <div
      className={cn(
        "py-1.5 px-4 bg-background rounded-full text-black/60 text-sm cursor-pointer hover:bg-black/10 transition-colors duration-200",
        selected ? "bg-black/50 text-white" : ""
      )}
      onClick={onClick}
    >
      {title}
    </div>
  );
}

export default SizeButton;
