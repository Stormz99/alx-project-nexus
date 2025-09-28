"use client";

import ShoppingCartIcon from "@/components/ShoppingCartIcon";

const CartPage = () => {
  // TODO: Replace 0 with cart state when integrating cart logic
  const cartCount = 0;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <ShoppingCartIcon count={cartCount} />
      <p className="mt-4 text-gray-700">Your cart is currently empty.</p>
    </div>
  );
};

export default CartPage;
