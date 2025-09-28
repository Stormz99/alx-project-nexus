"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const sampleProducts = [
  { id: "1", name: "Wireless Earbuds", price: 15000, image: "/images/earbuds.png" },
  { id: "2", name: "Smart Watch", price: 25000, image: "/images/smartwatch.png" },
  { id: "3", name: "Laptop Backpack", price: 12000, image: "/images/backpack.png" },
  { id: "4", name: "Bluetooth Speaker", price: 18000, image: "/images/speaker.png" },
];

export default function ProductsPage() {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAddToCart = (product: typeof sampleProducts[0]) => {
    addToCart({ ...product, quantity: 1 });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1000); // Reset feedback after 1s
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Our Products</h1>
        <p className="text-lg text-gray-700">
          Explore a wide selection of quality items at unbeatable prices.  
          Shop with <span className="font-semibold">GoCart</span> today!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sampleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative w-full h-48">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-t-xl"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
              <p className="text-gray-600 mb-4">₦{product.price.toLocaleString()}</p>
              <div className="flex justify-between items-center">
                <Link
                  href={`/products/${product.id}`}
                  className="text-blue-600 font-medium hover:underline"
                >
                  View Details
                </Link>
                <button
                  className={`bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition ${
                    addedId === product.id ? "opacity-70" : ""
                  }`}
                  onClick={() => handleAddToCart(product)}
                >
                  {addedId === product.id ? "Added!" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
