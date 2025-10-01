"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignOutPage() {
  const router = useRouter();

  useEffect(() => {
    // Clear tokens
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");

    // Optional: small delay for effect
    const timer = setTimeout(() => {
      router.replace("/"); // redirect to landing page
    }, 1500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 text-white px-4">
      <h1 className="text-4xl font-extrabold mb-4">You have signed out!</h1>
      <p className="text-lg mb-8">Redirecting you back to the landing page...</p>
      <div className="animate-pulse bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold shadow-lg">
        GoCart
      </div>
    </div>
  );
}
