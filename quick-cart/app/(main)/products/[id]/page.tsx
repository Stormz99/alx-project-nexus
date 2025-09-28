"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const sampleProducts = [
  { id: "1", name: "Wireless Earbuds", price: 15000, image: "/images/earbuds.png" },
  { id: "2", name: "Smart Watch", price: 25000, image: "/images/smartwatch.png" },
  { id: "3", name: "Laptop Backpack", price: 12000, image: "/images/backpack.png" },
  { id: "4", name: "Bluetooth Speaker", price: 18000, image: "/images/speaker.png" },
];

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const product = sampleProducts.find((p) => p.id === id);

  if (!product) return <p className="text-center mt-12">Product not found</p>;

  const handleAdd = () => {
    addToCart({ ...product, quantity: 1 });
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-2xl">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">{product.name}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain rounded-lg"
            />
          </div>

          <div>
            <p className="text-gray-600 mb-4">
              This is a high-quality {product.name}. Perfect for your needs and at an unbeatable price.
            </p>
            <p className="text-xl font-bold text-blue-600 mb-6">
              ₦{product.price.toLocaleString()}
            </p>
            <button
              className={`bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition ${
                added ? "opacity-70" : ""
              }`}
              onClick={handleAdd}
            >
              {added ? "Added!" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
