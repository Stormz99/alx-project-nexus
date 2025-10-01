"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/accounts/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        router.push("/"); // ✅ redirect to home (or change to /dashboard if you prefer)
      } else {
        const data: { message?: string } = await res.json();
        alert(data.message || "Failed to sign in");
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
        <h1 className="mb-4 text-xl font-bold">Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-2 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-2 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full p-2 mt-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
