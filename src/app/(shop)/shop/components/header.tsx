import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Header() {
  return (
    <div className="flex items-end gap-2 justify-between">
      <h1 className="text-3xl font-semibold">Casual</h1>
      <div className="flex items-center gap-2">
        <span className="text-[13px] text-black/60 font-thin">
          Showing 1-10 of 100 Products
        </span>
        <span className="text-[13px] text-black/60 font-thin">Sort by:</span>
        <Select defaultValue="popular">
          <SelectTrigger
            arrowClassName="text-black opacity-90 size-3"
            size="sm"
            className="min-w-[100px] text-[13px] text-black font-normal border-none outline-none focus:ring-0 focus:border-none shadow-none focus:outline-none active:ring-0 active:border-none active:outline-none focus-visible:ring-0 focus-visible:border-none focus-visible:outline-none py-4 cursor-pointer px-0"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="rating">Rating</SelectItem>
            <SelectItem value="price_desc">Price: High to Low</SelectItem>
            <SelectItem value="price_asc">Price: Low to High</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default Header;
