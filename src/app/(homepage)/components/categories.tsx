import React from "react";
import Image from "next/image";

function Categories() {
  return (
    <div className="flex justify-center px-4">
      <div className="max-w-[1240px] w-[1240px] px-12 py-8 flex flex-col gap-5 bg-background rounded-[40px]">
        <h2 className="text-black text-3xl font-bold text-center">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4 bg-white rounded-[20px] flex gap-2 h-[289px] cursor-pointer hover:scale-[1.02] hover:shadow-md transition-all duration-200">
            <div className="pl-6 pt-4">
              <h3 className="text-black text-xl font-medium">Casual</h3>
            </div>
            <div className="flex-grow flex items-stretch justify-end h-full">
              <Image
                src="/categories/casual.png"
                alt="Casual"
                width={407}
                height={289}
                className="h-auto w-auto object-cover rounded-r-[20px]"
              />
            </div>
          </div>
          <div className="col-span-8 bg-white rounded-[20px] flex gap-2 h-[289px] cursor-pointer hover:scale-[1.02] hover:shadow-md transition-all duration-200">
            <div className="pl-6 pt-4">
              <h3 className="text-black text-xl font-medium">Formal</h3>
            </div>
            <div className="flex-grow flex items-end justify-end h-full">
              <Image
                src="/categories/formal.png"
                alt="Formal"
                width={684}
                height={289}
                className="h-auto w-auto aspect-auto rounded-r-[20px]"
              />
            </div>
          </div>
          <div className="col-span-8 bg-white rounded-[20px] flex gap-2 h-[289px] cursor-pointer hover:scale-[1.02] hover:shadow-md transition-all duration-200">
            <div className="pl-6 pt-4">
              <h3 className="text-black text-xl font-medium">Party</h3>
            </div>
            <div className="flex-grow flex items-end justify-end h-full">
              <Image
                src="/categories/party.png"
                alt="Party"
                width={642}
                height={289}
                className="h-auto w-auto aspect-auto rounded-r-[20px]"
              />
            </div>
          </div>
          <div className="col-span-4 bg-white rounded-[20px] flex gap-2 h-[289px] cursor-pointer hover:scale-[1.02] hover:shadow-md transition-all duration-200">
            <div className="pl-6 pt-4">
              <h3 className="text-black text-xl font-medium">Gym</h3>
            </div>
            <div className="flex-grow flex items-stretch justify-end h-full">
              <Image
                src="/categories/gym.png"
                alt="Gym"
                width={354}
                height={289}
                className="h-auto w-auto aspect-auto rounded-r-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
