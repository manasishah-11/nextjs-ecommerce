"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

const images = [
  { id: "1", src: "/product_details/image1.png" },
  { id: "2", src: "/product_details/image2.png" },
  { id: "3", src: "/product_details/image3.png" },
];

function ImageCarousel() {
  const [selectedImage, setSelectedImage] = useState("1");

  return (
    <div className="flex gap-3">
      <div className="w-[150px] h-[530px] flex flex-col gap-3">
        {images.map((image) => (
          <div
            key={image.id}
            className={cn(
              "bg-background rounded-[20px] p-2 flex items-center justify-center flex-[1] cursor-pointer hover:scale-[1.01] hover:shadow-md transition-all duration-200 h-[168px]",
              selectedImage === image.id ? "border border-black" : ""
            )}
            onClick={() => setSelectedImage(image.id)}
          >
            <Image
              src={image.src}
              width={50}
              height={168}
              className="w-auto h-full aspect-auto"
              alt={`image${image.id}`}
            />
          </div>
        ))}
      </div>
      <div className="h-[530px] w-[444px] bg-background rounded-[20px] p-2 flex items-center justify-center">
        {Boolean(selectedImage) &&
          Boolean(images.find((image) => image.id === selectedImage)) && (
            <Image
              src={images.find((image) => image.id === selectedImage)!.src}
              width={50}
              height={514}
              className="w-auto h-full aspect-auto"
              alt="zoom_image"
            />
          )}
      </div>
    </div>
  );
}

export default ImageCarousel;
