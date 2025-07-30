import Image from "next/image";
import React from "react";

const brands = [
  { name: "Versace", logo: "/versace.png" },
  { name: "Zara", logo: "/zara.png" },
  { name: "Gucci", logo: "/gucci.png" },
  { name: "Prada", logo: "/prada.png" },
  { name: "Calvin Klein", logo: "/calvin-klein.png" },
];

function Brands() {
  return (
    <div className="bg-black flex justify-center px-4">
      <div className="max-w-[1240px] w-[1240px] py-4 grid grid-cols-5 gap-5 items-center">
        {brands.map((brand) => (
          <Image
            key={brand.name}
            src={brand.logo}
            alt={brand.name}
            width={60}
            height={60}
            className="h-auto w-auto aspect-auto"
          />
        ))}
      </div>
    </div>
  );
}

export default Brands;
