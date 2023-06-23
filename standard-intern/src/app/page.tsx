import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800">Welcome to Standard Intern Pro</h1>
        <p className="text-2xl text-gray-600 mt-4">Transform your career with valuable internships</p>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* Animated Feature Section */}
        <div className="flex items-center justify-center bg-white rounded-lg shadow-lg p-6 mb-4 mx-2 w-80">
          <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 animate-pulse" />
          <div className="flex flex-col ml-4">
            <h3 className="text-lg font-semibold">Gain Real-World Experience</h3>
            <p className="text-gray-500 mt-2">Work on impactful projects with top companies in your field.</p>
          </div>
        </div>
        {/* Add more animated feature sections here */}
      </div>
      <div className="flex flex-wrap justify-center mt-8">
        {/* Testimonials */}
        <div className="flex items-center justify-center bg-white rounded-lg shadow-lg p-6 mb-4 mx-2 w-80">
          <div className="w-16 h-16 bg-gray-200 rounded-full mb-4" />
          <div className="flex flex-col ml-4">
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-gray-500 mt-2">"Standard Intern Pro helped me land my dream internship and kickstart my career."</p>
          </div>
        </div>
        {/* Add more testimonial sections here */}
      </div>
      <div className="flex justify-center mt-12">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold">
          Apply Now
        </button>
      </div>
    </main>
  );
}
