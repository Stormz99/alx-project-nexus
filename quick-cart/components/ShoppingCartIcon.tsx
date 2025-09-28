"use client";

import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

const ShoppingCartIcon = () => {
  const { cart } = useCart();

  // Calculate total number of items in the cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative cursor-pointer">
      <FaShoppingCart size={24} className="text-gray-700" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 rounded-full">
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default ShoppingCartIcon;
