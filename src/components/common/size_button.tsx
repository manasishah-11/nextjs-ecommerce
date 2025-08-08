"use client";

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
      className="py-1.5 px-4 bg-background rounded-full text-black/60 tetx-sm cursor-pointer hover:bg-black/10 transition-colors duration-200"
      onClick={onClick}
    >
      {title}
    </div>
  );
}

export default SizeButton;
