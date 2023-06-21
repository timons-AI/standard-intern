import React from 'react';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Landing Page</h1>
      <p className="text-gray-600">
        Welcome to our website! Explore the opportunities and find your dream internship.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
