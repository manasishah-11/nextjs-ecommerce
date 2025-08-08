"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import Header from "./components/header";
import Filters from "./components/filters";
import { products } from "./data";
import ProductCard from "@/components/common/product_card";
import { useRouter } from "next/navigation";

export default function Shop() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Shop</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Casual</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex gap-5">
        <div className="w-[300px]">
          <Filters />
        </div>
        <div className="flex-grow flex flex-col gap-3">
          <Header />
          <div className="grid grid-cols-3 gap-5">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.name}
                image={product.image}
                price={product.price}
                rating={product.rating}
                onClick={() => router.push(`/shop/${product.id}`)}
              />
            ))}
          </div>
          {/* TODO: pagination */}
        </div>
      </div>
    </div>
  );
}
