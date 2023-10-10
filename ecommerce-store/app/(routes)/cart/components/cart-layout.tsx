"use client";

import useCart from "@/hooks/use-cart";

import CartItem from "./cart-item";
import Summary from "./summary";

const CartLayout: React.FC = () => {
  const cart = useCart();
  return (
    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
      <div className="lg:col-span-7">
        {cart.items.length === 0 && (
          <p className="text-neutral-500">No items added to cart.</p>
        )}
        <ul>
          {cart.items.map((item) => (
            <CartItem key={item.id} data={item} />
          ))}
        </ul>
      </div>
      <Summary />
    </div>
  );
};

export default CartLayout;
