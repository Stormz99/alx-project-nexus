"use client";

import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Search for:", query);
  };

  return (
    <div className="flex items-center border rounded-lg overflow-hidden">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 outline-none w-40 md:w-64"
      />
      <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
