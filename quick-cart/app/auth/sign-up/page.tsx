"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/axiosInstance";
import { servermsgOr } from "@/utils/helpers";

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
      const res = await axiosInstance.post("/auth/register/", {
        username,
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        password_confirm: passwordConfirm,
      });

      alert("Registration successful");
      router.push("/auth/sign-in");
    } catch (error: any) {
      console.error("Sign-up error:", error.response || error);
      alert(`Sign-up failed: ${servermsgOr(error.response?.data)}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded shadow-md space-y-2"
      >
        <h1 className="mb-4 text-xl font-bold">Sign Up</h1>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required className="w-full p-2 border rounded"/>
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required className="w-full p-2 border rounded"/>
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required className="w-full p-2 border rounded"/>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-2 border rounded"/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full p-2 border rounded"/>
        <input type="password" placeholder="Confirm Password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} required className="w-full p-2 border rounded"/>
        <button type="submit" className="w-full p-2 mt-2 text-white bg-green-600 rounded hover:bg-green-700">Sign Up</button>
      </form>
    </div>
  );
}
