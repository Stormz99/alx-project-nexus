"use client";

import ShoppingCartIcon from "@/components/ShoppingCartIcon";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { cart, addToCart } = useCart();
  const router = useRouter();

  // Calculate total cost
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleProceed = () => {
    // Navigate to a checkout page (to implement later)
    router.push("/checkout");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="mb-6">
        <ShoppingCartIcon count={cart.length} />
      </div>

      {cart.length === 0 ? (
        <p className="mt-4 text-gray-700">Your cart is currently empty.</p>
      ) : (
        <>
          <ul className="mt-4 space-y-2">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                <div>
                  <span className="font-semibold">{item.name}</span> x {item.quantity}
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-bold">₦{(item.price * item.quantity).toLocaleString()}</span>
                  <button
                    onClick={() => addToCart({ ...item, quantity: -1 })} // decrement logic
                    className="text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <span className="text-xl font-bold">Total: ₦{total.toLocaleString()}</span>
            <button
              onClick={handleProceed}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Proceed to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
