"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import axiosInstance from "../../../axiosInstance";
import axios from "axios";

export default function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password_confirm: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      const response = await axiosInstance.post("/auth/register/", formData);

      // Show success message
      setSuccess(true);

      // Clear form
      setFormData({
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        password_confirm: "",
      });

      // Redirect to home
      router.push("/main/home");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.error("Registration error:", err.response?.data);

        if (err.response?.data) {
          const errorData = err.response.data;
          if (typeof errorData === "object") {
            const errorMessages = Object.entries(errorData)
              .map(([field, messages]) => {
                const msgArray = Array.isArray(messages) ? messages : [messages];
                return `${field}: ${msgArray.join(", ")}`;
              })
              .join("\n");
            setError(errorMessages);
          } else {
            setError("Registration failed. Please try again.");
          }
        } else {
          setError("Network error. Please check your connection.");
        }
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign Up</h1>

        {success ? (
          <div className="text-center">
            <div className="mb-6 p-6 bg-green-100 border-2 border-green-500 rounded-lg">
              <svg
                className="w-16 h-16 text-green-500 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <h2 className="text-2xl font-bold text-green-700 mb-2">
                Account Created Successfully!
              </h2>
              <p className="text-gray-700 mb-4">
                Your account has been created. You can now sign in.
              </p>
            </div>

            <Link
              href="/auth/sign-in"
              className="inline-block w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition text-center"
            >
              Click Here to Sign In
            </Link>

            <button
              onClick={() => setSuccess(false)}
              className="mt-3 text-gray-600 hover:text-gray-800 text-sm"
            >
              Create another account
            </button>
          </div>
        ) : (
          <>
            <form onSubmit={handleSignUp} className="space-y-4">
              {/* form inputs unchanged */}
              {/* ... */}
            </form>

            {error && (
              <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg whitespace-pre-line text-sm">
                {error}
              </div>
            )}

            <p className="mt-4 text-center text-gray-600">
              Already have an account?{" "}
              <Link href="/auth/sign-in" className="text-green-600 hover:underline font-semibold">
                Sign In
              </Link>
            </p>
          </>
        )}
      </div>
    </main>
  );
}
