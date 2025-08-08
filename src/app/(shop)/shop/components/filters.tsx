"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { categories, colors, dress_styles, sizes } from "../data";
import ColorButton from "@/components/common/color_button";
import SizeButton from "@/components/common/size_button";

function Filters() {
  const [priceRange, setPriceRange] = useState<number[]>([0, 10000]);
  return (
    <div className="border border-black/10 rounded-[20px] py-6 px-4 flex flex-col gap-4">
      <h2 className="text-black text-[20px] font-semibold">Filters</h2>
      <hr className="border-[1.5px] border-black/10" />

      {/* categories */}
      <div className="flex flex-col gap-2 py-2">
        {categories.map((category) => (
          <div
            key={category.id}
            className="w-full flex items-center justify-between gap-2 cursor-pointer group transition-colors duration-200"
          >
            <span className="text-black/60 text-[16px] group-hover:text-black">
              {category.name}
            </span>
            <ChevronRight
              className="text-black/60  group-hover:text-black"
              size={16}
            />
          </div>
        ))}
      </div>
      <hr className="border-[1.5px] border-black/10" />

      <Accordion
        type="multiple"
        defaultValue={["price", "colors", "sizes", "dress_style"]}
      >
        {/* TODO: display min and max */}
        <AccordionItem value="price">
          <AccordionTrigger
            className="text-black text-[20px] font-semibold p-0 items-center mb-4"
            arrowClassName="text-black"
          >
            Price
          </AccordionTrigger>
          <AccordionContent className="flex items-center py-4">
            <Slider
              value={priceRange}
              min={0}
              max={10000}
              step={10}
              onValueChange={(value) => {
                setPriceRange(value);
              }}
            />
          </AccordionContent>
        </AccordionItem>
        <hr className="border-[1.5px] border-black/10 my-4" />
        {/* TODO: selected colors */}
        <AccordionItem value="colors">
          <AccordionTrigger
            className="text-black text-[20px] font-semibold p-0 items-center mb-4"
            arrowClassName="text-black"
          >
            Colors
          </AccordionTrigger>
          <AccordionContent className="flex items-center py-4">
            <div className="w-full grid grid-cols-5 gap-3">
              {colors.map((color) => (
                <ColorButton key={color.id} className={color.className} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <hr className="border-[1.5px] border-black/10 my-4" />
        {/* TODO: selected sizes */}
        <AccordionItem value="sizes">
          <AccordionTrigger
            className="text-black text-[20px] font-semibold p-0 items-center mb-4"
            arrowClassName="text-black"
          >
            Sizes
          </AccordionTrigger>
          <AccordionContent className="flex py-4">
            <div className="w-full flex flex-wrap gap-3">
              {sizes.map((size) => (
                <SizeButton key={size.id} title={size.name} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <hr className="border-[1.5px] border-black/10 my-4" />
        <AccordionItem value="dress_style">
          <AccordionTrigger
            className="text-black text-[20px] font-semibold p-0 items-center mb-4"
            arrowClassName="text-black"
          >
            Dress Style
          </AccordionTrigger>
          <AccordionContent className="flex items-center py-4">
            <div className="w-full flex flex-col gap-2">
              {dress_styles.map((category) => (
                <div
                  key={category.id}
                  className="w-full flex items-center justify-between gap-2 cursor-pointer group transition-colors duration-200"
                >
                  <span className="text-black/60 text-[16px] group-hover:text-black">
                    {category.name}
                  </span>
                  <ChevronRight
                    className="text-black/60  group-hover:text-black"
                    size={16}
                  />
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Filters;
