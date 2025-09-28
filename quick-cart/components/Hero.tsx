"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const handleShopNow = () => {
    router.push("/products"); // Navigate to the products page
  };

  return (
    <section className="relative w-full min-h-screen">
      {/* Hero background image */}
      <Image
        src="/images/hero.jpg"
        alt="Hero image"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-start">
        <div className="px-6 md:px-12 lg:px-24 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            Your Style, Your Store
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 drop-shadow-md">
            Thousands of options updated daily. Don’t miss out on exclusive discounts — grab yours before they’re gone!
          </p>
          <button
            onClick={handleShopNow}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition font-semibold"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
