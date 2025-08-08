import Rating from "@/components/common/rating";
import { CircleCheck } from "lucide-react";
import React from "react";
import { format } from "date-fns";

type RatingCardProps = {
  rating: number;
  user: string;
  verified: boolean;
  description: string;
  createdDate: Date;
};

function RatingCard({
  rating,
  user,
  verified,
  description,
  createdDate,
}: RatingCardProps) {
  return (
    <div className="border border-black/10 rounded-[20px] p-5 flex flex-col gap-2">
      <Rating rating={rating} />
      <div className="flex items-center gap-2">
        <h3 className="text-black text-[20px] font-semibold">{user}</h3>
        {verified && <CircleCheck fill="#01AB31" className="text-white" />}
      </div>
      <span className="text-black/60 text-[16px]">{`"${description}"`}</span>
      <span className="text-black/60 text-[13px] font-light">
        {`Posted on ${format(createdDate, "MMMM dd, yyyy")}`}
      </span>
    </div>
  );
}

export default RatingCard;
