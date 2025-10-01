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
      const res = await fetch("/api/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const text = await res.text();
      let body: any = text;
      try { body = JSON.parse(text); } catch {}

      console.log("Sign-in response status:", res.status);
      console.log("Sign-in response body:", body);

      if (res.ok) {
        alert("Sign-in successful");
        router.push("/");
      } else {
        alert(`Sign-in failed (status ${res.status}): ${servermsgOr(body)}`);
      }
    } catch (error) {
      console.error("Sign-in fetch error:", error);
      alert(`Network or fetch error: ${String(error)}`);
    }
  };

  function servermsgOr(body: any) {
    if (!body) return "No response body";
    if (typeof body === "string") return body;
    if (body.error) return body.error;
    if (body.detail) return body.detail;
    return JSON.stringify(body);
  }

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
