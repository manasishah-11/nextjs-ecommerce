import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="bg-background flex justify-center px-4">
      <div className="max-w-[1240px] w-[1240px] pt-12 grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-5 pb-12">
          <h1 className="text-black text-7xl font-extrabold">
            FIND CLOTHES THAT MATCH YOUR STYLES
          </h1>
          <p className="text-black/50 text-sm font-normal">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="w-[210px] bg-black text-white px-6 py-2 rounded-full text-sm font-normal hover:scale-[1.02] transition-transform duration-200 cursor-pointer">
            Shop Now
          </button>
          <div className="grid grid-cols-3">
            <div className="border-r border-r-black/10 pr-8">
              <h3 className="text-black text-[40px] font-semibold">200+</h3>
              <p className="text-black/50 text-[13px] font-normal">
                International Brands
              </p>
            </div>
            <div className="border-r border-r-black/10 px-8">
              <h3 className="text-black text-[40px] font-semibold">2,000+</h3>
              <p className="text-black/50 text-[13px] font-normal">
                High Quality Products
              </p>
            </div>
            <div className="pl-8">
              <h3 className="text-black text-[40px] font-semibold">30,000+</h3>
              <p className="text-black/50 text-[13px] font-normal">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
        <div className="h-full relative">
          <div className="absolute top-10 right-0">
            <Image
              src="/sparkle.png"
              alt="homepage"
              width={100}
              height={100}
              className="h-full w-auto aspect-auto"
            />
          </div>
          <div className="absolute top-1/2 left-20">
            <Image
              src="/sparkle.png"
              alt="homepage"
              width={50}
              height={50}
              className="h-1/2 w-auto aspect-auto"
            />
          </div>
          <div className="h-full flex justify-end items-end">
            <Image
              src="/hero-image.png"
              alt="homepage"
              width={300}
              height={400}
              className="h-auto w-auto aspect-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
