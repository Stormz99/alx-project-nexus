const Contact = () => {
    return (
      <main className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-10">
            Have questions or need help? We’re here to assist you.
          </p>
  
          <div className="bg-white shadow-md rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-left font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-left font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-left font-medium text-gray-700">Message</label>
                <textarea
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                  rows={5}
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  };
  
  export default Contact;
  