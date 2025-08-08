import React from "react";
import Footer from "@/components/common/footer";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col bg-white min-h-[calc(100vh-108px)]">
      <div className="flex-grow flex justify-center px-4 py-4">
        <div className="max-w-[1240px] w-[1240px]">{children}</div>
      </div>
      <div className="mt-15">
        <Footer />
      </div>
    </div>
  );
}
