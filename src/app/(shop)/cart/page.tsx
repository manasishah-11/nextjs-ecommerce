import React, { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cart_items } from "./data";
import CartItem from "./components/cart_item";
import OrderSummary from "./components/order_summary";

function Cart() {
  return (
    <div className="flex flex-col gap-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Cart</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h2 className="text-black text-3xl font-bold">YOUR CART</h2>
      <div className="flex gap-5">
        <div className="flex-grow border border-black/10 rounded-[20px] p-5 flex flex-col gap-4">
          {cart_items.map((item, index) => (
            <Fragment key={item.id}>
              <CartItem
                title={item.title}
                size={item.size}
                color={item.color}
                imgSrc={item.img_src}
                quantity={item.quantity}
                price={item.price}
              />
              {index < cart_items.length - 1 && (
                <hr className="border-black/10" />
              )}
            </Fragment>
          ))}
        </div>
        <div className="w-[500px]">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

export default Cart;
