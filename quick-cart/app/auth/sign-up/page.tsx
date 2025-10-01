"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react"; // <- Type hint
import { servermsgOr } from "../../../utils/helpers"; // <- Correct path


export default function SignUpPage() {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
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

      const text: string = await res.text();
      let body: any = text;
      try {
        body = JSON.parse(text);
      } catch {
        /* ignore if not JSON */
      }

      console.log("Sign-up response status:", res.status);
      console.log("Sign-up response body:", body);

      if (res.ok) {
        alert("Registration successful");
        router.push("/auth/sign-in");
      } else {
        alert(`Sign-up failed (status ${res.status}): ${servermsgOr(body)}`);
      }
    } catch (error: unknown) {
      console.error("Sign-up fetch error:", error);
      alert(`Network or fetch error: ${String(error)}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md space-y-2">
        <h1 className="mb-4 text-xl font-bold">Sign Up</h1>
        <input type="text" placeholder="Username" className="w-full p-2 border rounded" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <input type="text" placeholder="First Name" className="w-full p-2 border rounded" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        <input type="text" placeholder="Last Name" className="w-full p-2 border rounded" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input type="password" placeholder="Confirm Password" className="w-full p-2 border rounded" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} required />
        <button type="submit" className="w-full p-2 mt-2 text-white bg-green-600 rounded hover:bg-green-700">Sign Up</button>
      </form>
    </div>
  );
}
