"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // POST to backend via Netlify proxy (trailing slash kept)
      const res = await fetch("/api/auth/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          password_confirm: passwordConfirm,
        }),
      });

      // Read raw text, then try to parse JSON for nicer output
      const text = await res.text();
      let body: any = text;
      try { body = JSON.parse(text); } catch (err) { /* not JSON */ }

      console.log("Sign-up response status:", res.status);
      console.log("Sign-up response body:", body);

      if (res.ok) {
        alert("Registration successful");
        router.push("/auth/sign-in");
      } else {
        // Show specific server message if available
        const serverMsg = typeof body === "object" ? JSON.stringify(body) : String(body);
        alert(`Sign-up failed (status ${res.status}): ${servermsgOr(body)}`);
      }
    } catch (error) {
      console.error("Sign-up fetch error:", error);
      alert(`Network or fetch error: ${String(error)}`);
    }
  };

  // small helper for alert string
  function servermsgOr(body: any) {
    if (!body) return "No response body";
    if (typeof body === "string") return body;
    if (body.error) return body.error;
    if (body.detail) return body.detail;
    return JSON.stringify(body);
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded shadow-md space-y-2"
      >
        <h1 className="mb-4 text-xl font-bold">Sign Up</h1>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="First Name"
          className="w-full p-2 border rounded"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full p-2 border rounded"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 border rounded"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full p-2 mt-2 text-white bg-green-600 rounded hover:bg-green-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
