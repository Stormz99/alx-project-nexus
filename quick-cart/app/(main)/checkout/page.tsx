"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart } = useCart();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePayment = (method: string) => {
    // TODO: Integrate backend payment logic here
    alert(`You selected ${method}. Total: ₦${total.toLocaleString()}`);
    router.push("/"); // Redirect to home or success page after payment
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <p>Your cart is empty. Add some products first.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
        <ul className="space-y-2">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between">
              <span>{item.name} x {item.quantity}</span>
              <span>₦{(item.price * item.quantity).toLocaleString()}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 font-bold text-lg">
          Total: ₦{total.toLocaleString()}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Select Payment Method</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <button
            onClick={() => handlePayment("Bank Transfer")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Bank Transfer
          </button>
          <button
            onClick={() => handlePayment("PayPal")}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            PayPal
          </button>
          <button
            onClick={() => handlePayment("Payoneer")}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Payoneer
          </button>
          <button
            onClick={() => handlePayment("Moniepoint")}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Moniepoint
          </button>
        </div>
      </div>
    </div>
  );
}
