import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center">
      
      <header className="w-full bg-pink-600 text-white py-6">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">About Sociopink</h1>
        </div>
      </header>

    
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-pink-700 mb-4">
            Welcome to Sociopink
          </h2>
          <p className="text-gray-700">
            Sociopink is your one-stop destination for all your beauty needs.
            We believe in empowering individuals to express themselves through
            beauty and self-care. From skincare essentials to the latest
            makeup trends, we offer products that are carefully curated to meet
            your needs.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-pink-700 mb-3">Our Vision</h3>
            <p className="text-gray-700">
              At Sociopink, our vision is to inspire confidence and celebrate
              individuality by providing high-quality beauty products that are
              accessible to everyone.
            </p>
          </div>

        
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-pink-700 mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To create a community that fosters self-expression, supports
              inclusivity, and helps individuals feel their best every day.
            </p>
          </div>
        </section>
      </main>
      
    </div>
  );
}
