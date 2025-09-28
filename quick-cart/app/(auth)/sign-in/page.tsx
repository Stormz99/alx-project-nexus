"use client";

import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();

  const handleSignIn = () => {
    // simulate login
    localStorage.setItem("authToken", "123");
    router.push("/(main)/home"); // send user to homepage
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-3xl font-bold mb-6">Sign In</h1>
      <button
        onClick={handleSignIn}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg"
      >
        Simulate Sign In
      </button>
    </main>
  );
}
