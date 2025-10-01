"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/axiosInstance";

export default function SignUpPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axiosInstance.post("/auth/register/", {
        username: form.username,
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        password: form.password,
        password_confirm: form.passwordConfirm,
      });
      alert("Registration successful. Please Sign In.");
      router.push("/auth/sign-in");
    } catch (error: any) {
      console.error(error);
      alert(error.message || "Sign-up failed. Check your network or backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded shadow-md space-y-2 w-full max-w-md"
      >
        <h1 className="mb-4 text-xl font-bold text-center">Sign Up</h1>
        {["username","firstName","lastName","email","password","passwordConfirm"].map((field) => (
          <input
            key={field}
            name={field}
            type={field.includes("password") ? "password" : field === "email" ? "email" : "text"}
            placeholder={field.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
            value={(form as any)[field]}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        ))}
        <button
          type="submit"
          disabled={loading}
          className={`w-full p-2 mt-2 text-white rounded ${loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"}`}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
