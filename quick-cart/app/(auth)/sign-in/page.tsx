"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import axiosInstance from "../../../axiosInstance";

export default function SignUp() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    try {
      const res = await axiosInstance.post("/register/", { username, email, password });
      localStorage.setItem("authToken", res.data.access); // store JWT
      router.push("/home"); // redirect after signup
    } catch (err: any) {
      setError(err.response?.data?.detail || "Registration failed");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="mb-2 px-4 py-2 border rounded" />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-2 px-4 py-2 border rounded" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-2 px-4 py-2 border rounded" />
      <button onClick={handleSignUp} className="px-6 py-3 bg-green-600 text-white rounded-lg">Sign Up</button>
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </main>
  );
}
