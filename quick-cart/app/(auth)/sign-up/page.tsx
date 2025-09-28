"use client";

import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Sign Up</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="px-4 py-2 border rounded-lg outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-2 border rounded-lg outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-2 border rounded-lg outline-none"
        />
        <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-center text-gray-600">
        Already have an account?{" "}
        <Link href="/(auth)/sign-in" className="text-blue-600 font-semibold hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUpPage;
