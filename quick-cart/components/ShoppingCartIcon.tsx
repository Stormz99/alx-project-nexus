"use client";

import { FaShoppingCart } from "react-icons/fa";

type ShoppingCartIconProps = {
  count?: number;
  onClick?: () => void; // Click handler
};

const ShoppingCartIcon: React.FC<ShoppingCartIconProps> = ({ count = 0, onClick }) => {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      <FaShoppingCart size={24} className="text-gray-700" />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 rounded-full">
          {count}
        </span>
      )}
    </div>
  );
};

export default ShoppingCartIcon;
