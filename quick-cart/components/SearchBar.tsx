"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Sample products
const sampleProducts = [
  { id: "1", name: "Wireless Earbuds" },
  { id: "2", name: "Smart Watch" },
  { id: "3", name: "Laptop Backpack" },
  { id: "4", name: "Bluetooth Speaker" },
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof sampleProducts>([]);
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      setShowResults(false);
      return;
    }

    const filtered = sampleProducts.filter((p) =>
      p.name.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
    setShowResults(true);
  };

  const handleSelect = (id: string) => {
    setQuery("");
    setResults([]);
    setShowResults(false);
    router.push(`/products/${id}`);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleSearch}
        className="border rounded-lg px-4 py-2 w-40 md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      {showResults && (
        <div className="absolute mt-1 bg-white shadow-lg w-full rounded-md z-50">
          {results.length > 0 ? (
            results.map((product) => (
              <div
                key={product.id}
                className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                onClick={() => handleSelect(product.id)}
              >
                {product.name}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">Product not available</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
