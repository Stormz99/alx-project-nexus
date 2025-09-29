"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LandingPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      router.replace("/main/home");
    }
  }, [router]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
      {/* Welcome Section */}
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-5xl font-extrabold text-black">
          Welcome to <span className="text-blue-600">GoCart</span>
        </h1>
        <p className="text-lg text-gray-600">
          Your one-stop shop for everything you need. <br />
          Fast, reliable, and just a click away!
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/auth/sign-in"
            className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 transition"
          >
            Sign In
          </Link>
          <Link
            href="/auth/sign-up"
            className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}
