"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import axiosInstance from "../../../axiosInstance";

export default function SignIn() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await axiosInstance.post("/auth/login/", {
        username,
        password,
      });
      localStorage.setItem("authToken", response.data.access); // store JWT
      router.push("/main/home"); // ✅ updated
    } catch (err: any) {
      setError(err.response?.data?.detail || "Login failed");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-3xl font-bold mb-6">Sign In</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-2 px-4 py-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 px-4 py-2 border rounded"
      />
      <button
        onClick={handleSignIn}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg"
      >
        Sign In
      </button>
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </main>
  );
}
