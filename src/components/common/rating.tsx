import React from "react";
import { Star, StarHalf } from "lucide-react";

type RatingProps = {
  rating: number;
};

function Rating({ rating }: RatingProps) {
  return (
    <div className="flex items-center gap-1">
      {rating <= 0 ? (
        <Star className="text-black/10" strokeWidth={1} />
      ) : rating > 0 && rating < 1 ? (
        <StarHalf fill="#FFC633" strokeWidth={0} />
      ) : (
        <Star fill="#FFC633" strokeWidth={0} />
      )}
      {rating < 1.5 ? (
        <Star className="text-black/10" strokeWidth={1} />
      ) : rating >= 1.5 && rating < 2 ? (
        <StarHalf fill="#FFC633" strokeWidth={0} />
      ) : (
        <Star fill="#FFC633" strokeWidth={0} />
      )}
      {rating < 2.5 ? (
        <Star className="text-black/10" strokeWidth={1} />
      ) : rating >= 2.5 && rating < 3 ? (
        <StarHalf fill="#FFC633" strokeWidth={0} />
      ) : (
        <Star fill="#FFC633" strokeWidth={0} />
      )}
      {rating < 3.5 ? (
        <Star className="text-black/10" strokeWidth={1} />
      ) : rating >= 3.5 && rating < 4 ? (
        <StarHalf fill="#FFC633" strokeWidth={0} />
      ) : (
        <Star fill="#FFC633" strokeWidth={0} />
      )}
      {rating < 4.5 ? (
        <Star className="text-black/10" strokeWidth={1} />
      ) : rating >= 4.5 && rating < 5 ? (
        <StarHalf fill="#FFC633" strokeWidth={0} />
      ) : (
        <Star fill="#FFC633" strokeWidth={0} />
      )}
      <span className="text-black text-[13px] font-light">
        {rating.toFixed(1)}/5
      </span>
    </div>
  );
}

export default Rating;
