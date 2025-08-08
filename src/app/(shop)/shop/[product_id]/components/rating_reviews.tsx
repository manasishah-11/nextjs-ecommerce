import { SlidersVertical } from "lucide-react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ratings } from "../data";
import RatingCard from "./rating_card";

function RatingReviews() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 justify-between">
        <h3 className="text-black text-[24px] font-semibold">
          All Reviews{" "}
          <span className="text-black/60 font-normal !text-[18px]">(451)</span>
        </h3>
        <div className="flex items-center gap-3">
          <button className="rounded-full bg-background h-11 w-11 flex justify-center items-center cursor-pointer">
            <SlidersVertical className="text-black" size={16} strokeWidth={3} />
          </button>
          <Select defaultValue="latest">
            <SelectTrigger
              arrowClassName="text-black opacity-90 size-3"
              className="min-w-[110px] text-sm text-black font-normal border-none outline-none focus:ring-0 focus:border-none shadow-none focus:outline-none active:ring-0 active:border-none active:outline-none focus-visible:ring-0 focus-visible:border-none focus-visible:outline-none cursor-pointer px-4 bg-background !h-11 rounded-full"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="earliest">Earliest</SelectItem>
              <SelectItem value="rating_desc">Rating: High to Low</SelectItem>
              <SelectItem value="rating_asc">Rating: Low to High</SelectItem>
            </SelectContent>
          </Select>
          <button className="h-11 rounded-full bg-black text-white text-sm px-4 cursor-pointer">
            Write a Review
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {ratings.map((rating) => (
          <RatingCard
            key={rating.id}
            user={rating.user}
            verified={rating.verified}
            rating={rating.rating}
            description={rating.description}
            createdDate={rating.created_date}
          />
        ))}
      </div>
      {/* TODO: load more reviews */}
    </div>
  );
}

export default RatingReviews;
