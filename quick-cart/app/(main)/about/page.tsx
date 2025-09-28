const About = () => {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">About GoCart</h1>
          <p className="text-lg text-gray-700 mb-8">
            GoCart is your smart shopping companion, built to make online shopping faster, 
            simpler, and more rewarding. We’re passionate about combining convenience, 
            affordability, and trust—ensuring that every checkout feels effortless.
          </p>
        </div>
  
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To redefine online shopping by giving customers a smooth, reliable, 
              and enjoyable experience—every time they visit GoCart.
            </p>
          </div>
  
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-gray-600">
              With GoCart, you get more than just products—you get fast delivery, 
              secure payments, and a customer-first approach that puts you at the 
              center of everything we do.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  