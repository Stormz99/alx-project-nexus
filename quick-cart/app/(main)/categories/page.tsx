const Categories = () => {
    return (
      <main className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Shop by Categories</h1>
          <p className="text-lg text-gray-700 mb-10">
            Discover a wide variety of products tailored to your lifestyle. Choose a category to start shopping.
          </p>
  
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {["Electronics", "Fashion", "Home & Kitchen", "Sports", "Toys", "Beauty", "Books", "Groceries"].map((category) => (
              <div
                key={category}
                className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition cursor-pointer"
              >
                <h2 className="text-xl font-semibold text-gray-800">{category}</h2>
                <p className="text-sm text-gray-500 mt-2">Explore {category.toLowerCase()} products</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  };
  
  export default Categories;
  