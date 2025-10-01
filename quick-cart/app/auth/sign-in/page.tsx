"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/axiosInstance";
import { servermsgOr } from "@/utils/helpers";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Redirect to home if already logged in
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) router.replace("/main/home");
  }, [router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axiosInstance.post("/auth/login/", { email, password });
      localStorage.setItem("access_token", res.data.tokens.access);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      alert("Sign-in successful!");
      router.push("/main/home");
    } catch (error: any) {
      console.error("Sign-in error:", error.response || error);
      const msg = error.response?.data
        ? servermsgOr(error.response.data)
        : "No response body from server.";
      alert(`Sign-in failed: ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <form className="p-8 bg-white rounded-2xl shadow-lg w-full max-w-md space-y-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-center text-blue-600">Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full p-3 mt-2 text-white rounded-lg ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
