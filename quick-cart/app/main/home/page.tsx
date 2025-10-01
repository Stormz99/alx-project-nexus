"use client";

import Link from "next/link";
import Hero from "@/components/Hero";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();

  // Redirect to landing if not logged in
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) router.replace("/");
  }, [router]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-blue-50 to-white">
      <Hero />

      <div className="text-center space-y-6 max-w-2xl mt-16 px-4">
        <h1 className="text-5xl font-extrabold text-black">
          Welcome to <span className="text-blue-600">GoCart</span>
        </h1>
        <p className="text-lg text-gray-600">
          Your one-stop shop for everything you need. <br />
          Fast, reliable, and just a click away!
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/main/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Start Shopping
          </Link>
          <Link
            href="/main/about"
            className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Feature Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl w-full px-4 pb-16">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600">Fast Delivery</h3>
          <p className="text-gray-600 mt-2">
            Get your products delivered at lightning speed right to your doorstep.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600">Secure Payments</h3>
          <p className="text-gray-600 mt-2">
            We ensure your transactions are safe with industry-leading security.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600">Wide Selection</h3>
          <p className="text-gray-600 mt-2">
            From gadgets to groceries, find everything you need in one place.
          </p>
        </div>
      </section>
    </main>
  );
}
