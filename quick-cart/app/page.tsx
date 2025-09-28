"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LandingPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      router.replace("/(main)/home");
    }
  }, [router]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-4xl font-bold mb-6">Welcome to Quick Cart</h1>
      <p className="mb-6 text-gray-700 text-center">
        Please sign in or sign up to continue.
      </p>
      <div className="flex gap-4">
        <Link
          href="/(auth)/sign-in"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          Sign In
        </Link>
        <Link
          href="/(auth)/sign-up"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg"
        >
          Sign Up
        </Link>
      </div>
    </main>
  );
}
