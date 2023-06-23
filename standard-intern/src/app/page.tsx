import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center justify-between mb-8">
        <p className="text-4xl font-extrabold bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent capitalize">
          Standard Intern Pro
        </p>
        <p className="text-4xl font-extrabold bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500 text-transparent capitalize">
          The Standard Corporation.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* Top Companies */}
        <div className="flex items-center justify-center bg-white rounded-lg shadow-lg p-6 mb-4 mx-2 w-64">
          <div className="w-16 h-16 bg-gray-200 rounded-full mb-4" />
          <div className="flex flex-col ml-4">
            <h3 className="text-lg font-semibold">Company Name</h3>
            <p className="text-gray-500">Salary: $5000</p>
            <p className="text-gray-500">Duration: 3 months</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
              Apply
            </button>
          </div>
        </div>
        {/* Add more company cards here */}
      </div>
      <div className="flex flex-wrap justify-center mt-8">
        {/* Suggested Companies */}
        <div className="flex items-center justify-center bg-white rounded-lg shadow-lg p-6 mb-4 mx-2 w-64">
          <div className="w-16 h-16 bg-gray-200 rounded-full mb-4" />
          <div className="flex flex-col ml-4">
            <h3 className="text-lg font-semibold">Company Name</h3>
            <p className="text-gray-500">Salary: $5000</p>
            <p className="text-gray-500">Duration: 3 months</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
              Apply
            </button>
          </div>
        </div>
        {/* Add more suggested company cards here */}
      </div>
    </main>
  );
}
