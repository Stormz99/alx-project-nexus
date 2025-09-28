"use client";

import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();

  const handleSignUp = () => {
    // simulate signup
    localStorage.setItem("authToken", "123");
    router.push("/(main)/home"); // send user to homepage
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
      <button
        onClick={handleSignUp}
        className="px-6 py-3 bg-green-600 text-white rounded-lg"
      >
        Simulate Sign Up
      </button>
    </main>
  );
}
