"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import ShoppingCartIcon from "@/components/ShoppingCartIcon";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cart, removeFromCart, incrementItem, decrementItem } = useCart();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleProceed = () => {
    router.push("/checkout");
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <p>
          Your cart is empty.{" "}
          <Link href="/" className="text-blue-600 underline">
            Continue Shopping
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="mb-6">
        <ShoppingCartIcon count={cart.reduce((acc, item) => acc + item.quantity, 0)} />
      </div>

      <ul className="space-y-4">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow"
          >
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-gray-600">₦{item.price.toLocaleString()}</p>
              <div className="flex items-center mt-2 space-x-2">
                <button
                  onClick={() => decrementItem(item.id)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => incrementItem(item.id)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-600 font-semibold hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="font-bold">
              ₦{(item.price * item.quantity).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-between items-center">
        <Link href="/" className="text-blue-600 underline">
          Continue Shopping
        </Link>
        <div className="text-xl font-bold">Total: ₦{total.toLocaleString()}</div>
        <button
          onClick={handleProceed}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
