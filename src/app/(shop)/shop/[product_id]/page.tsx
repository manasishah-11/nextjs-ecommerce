import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageCarousel from "./components/image_carousel";
import ProductSummary from "./components/summary";
import ProductDetailsTab from "./components/product_details";
import RatingReviews from "./components/rating_reviews";
import FAQs from "./components/faqs";
import ProductCard from "@/components/common/product_card";
import { featured_products } from "./data";

function ProductDetails() {
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
            <BreadcrumbLink href="/components">Men</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>T-shirts</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex gap-5">
        <ImageCarousel />
        <div className="flex-grow">
          <ProductSummary />
        </div>
      </div>
      <Tabs defaultValue="rating" className="w-full gap-6">
        <TabsList className="w-full">
          <TabsTrigger value="product_details">Product Details</TabsTrigger>
          <TabsTrigger value="rating">Rating & Reviews</TabsTrigger>
          <TabsTrigger value="faq">FAQs</TabsTrigger>
        </TabsList>
        <TabsContent value="product_details">
          <ProductDetailsTab />
        </TabsContent>
        <TabsContent value="rating">
          <RatingReviews />
        </TabsContent>
        <TabsContent value="faq">
          <FAQs />
        </TabsContent>
      </Tabs>
      <div className="flex flex-col gap-5">
        <h2 className="text-black text-3xl font-bold text-center">
          YOU MIGHT ALSO LIKE
        </h2>
        <div className="grid grid-cols-4 gap-5">
          {featured_products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              image={product.image}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
