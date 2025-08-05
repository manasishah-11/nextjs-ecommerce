import React from "react";
import Image from "next/image";
import { Star, StarHalf } from "lucide-react";

type ProductCardProps = {
  title: string;
  image: string;
  price: number;
  rating: number;
};

function ProductCard({ title, image, price, rating }: ProductCardProps) {
  return (
    <div className="w-min-[300px] w-full flex flex-col gap-2 cursor-pointer hover:scale-[1.02] transition-all duration-200 ease-in-out">
      <div className="bg-background rounded-[20px] p-4 h-[300px] flex justify-center items-center">
        <Image
          src={image}
          alt={title}
          width={250}
          height={250}
          className="h-auto w-auto aspect-auto"
        />
      </div>
      <h3 className="text-black text-[20px] font-semibold">{title}</h3>
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
      <h3 className="text-black text-[20px] font-semibold">{`₹${price}`}</h3>
    </div>
  );
}

export default ProductCard;
