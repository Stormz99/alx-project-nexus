"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/axiosInstance";
import { servermsgOr } from "@/utils/helpers";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/auth/login/", { email, password });
      localStorage.setItem("access_token", res.data.tokens.access); // store JWT
      localStorage.setItem("user", JSON.stringify(res.data.user)); // store user info
      alert("Sign-in successful");
      router.push("/main/home"); // redirect to home
    } catch (error: any) {
      console.error("Sign-in error:", error.response || error);
      alert(`Sign-in failed: ${servermsgOr(error.response?.data)}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
        <h1 className="mb-4 text-xl font-bold">Sign In</h1>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full mb-2 p-2 border rounded"/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full mb-2 p-2 border rounded"/>
        <button type="submit" className="w-full p-2 mt-2 text-white bg-blue-600 rounded hover:bg-blue-700">Sign In</button>
      </form>
    </div>
  );
}
