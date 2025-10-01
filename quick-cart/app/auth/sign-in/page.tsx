"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import axiosInstance from "../../../axiosInstance";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axiosInstance.post("/auth/login/", {
        email,
        password,
      });

      // Store tokens
      if (response.data.tokens) {
        localStorage.setItem("access_token", response.data.tokens.access);
        localStorage.setItem("refresh_token", response.data.tokens.refresh);
      }

      // Redirect to home
      router.push("/main/home");
    } catch (err: any) {
      console.error("Login error:", err.response?.data);

      if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else if (err.response?.data) {
        const errorData = err.response.data;
        if (typeof errorData === "object") {
          const errorMessages = Object.values(errorData).join(", ");
          setError(errorMessages);
        } else {
          setError("Login failed. Please try again.");
        }
      } else {
        setError("Network error. Please check your connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign In</h1>

        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold transition"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {error && (
          <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        <p className="mt-4 text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <a href="/auth/sign-up" className="text-blue-600 hover:underline font-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </main>
  );
}
