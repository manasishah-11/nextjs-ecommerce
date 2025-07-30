"use client";

import { CircleUserRound, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const header_links = [
  { name: "Shop", href: null, categories: [] },
  { name: "On Sale", href: "/shop?sale=true" },
  { name: "New Arrivals", href: "/shop?new=true" },
  { name: "Contact", href: "/contact" },
];

function HeaderNavigation() {
  const [showDiscountBanner, setShowDiscountBanner] = useState(true);
  return (
    <div>
      {showDiscountBanner && (
        <div className="bg-black flex flex-col items-center px-2">
          <div className="max-w-[1240px] w-[1240px] py-2 relative">
            <h3 className="text-white text-[13px] font-light text-center">
              Sign up and get 20% off to your first order.{" "}
              <a
                className="underline cursor-pointer hover:text-[15px] hover:font-semibold transition-all duration-200"
                href="/signup"
              >
                Sign Up
              </a>{" "}
              Now
            </h3>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 text-xs font-normal hover:scale-110 transition-transform duration-200 cursor-pointer"
              onClick={() => setShowDiscountBanner(false)}
            >
              <p className="text-white font-semibold text-sm">x</p>
            </button>
          </div>
        </div>
      )}
      <div className="bg-white flex flex-col items-center px-4">
        <div className="max-w-[1240px] w-[1240px] py-3 flex items-center gap-5">
          <div className="flex items-center gap-1">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <h1 className="text-black text-[32px] font-bold">SHOP.CO</h1>
          </div>
          {header_links.map((link) => (
            <a
              key={link.href || link.name}
              href={link.href || "#"}
              className="text-black text-[16px] font-normal hover:text-black/50 hover:font-medium hover:scale-110 transition-transform duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="flex-grow relative transition-transform duration-200 hover:scale-y-110 focus-within:scale-y-110">
            <Search
              size={20}
              className="text-black/10 absolute left-3 top-1/2 -translate-y-1/2"
            />
            <input className="rounded-full w-full bg-background py-1 pl-12 pr-6 border border-transparent focus:border-black/10 focus:outline-none text-sm font-light" />
          </div>
          <div>
            <button className="bg-transparent rounded-full border-none disabled:opacity-50 cursor-pointer focus:outline-none hover:scale-110 transition-transform duration-200">
              <ShoppingCart size={20} className="text-black" />
            </button>
          </div>
          <div>
            <button className="bg-transparent rounded-full border-none disabled:opacity-50 cursor-pointer focus:outline-none hover:scale-110 transition-transform duration-200">
              <CircleUserRound size={20} className="text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderNavigation;
