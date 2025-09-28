"use client";

import ShoppingCartIcon from "@/components/ShoppingCartIcon";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { cart } = useCart(); // get cart from context

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      
      {/* ShoppingCartIcon now reads count from context automatically */}
      <ShoppingCartIcon />

      {cart.length === 0 ? (
        <p className="mt-4 text-gray-700">Your cart is currently empty.</p>
      ) : (
        <ul className="mt-4 space-y-2">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between">
              <span>{item.name} x {item.quantity}</span>
              <span>${item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
