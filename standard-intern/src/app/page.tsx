import React from 'react';
import Head from 'next/head';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-100 text-black p-5">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="card bg-gradient-diagonal-orange rounded-lg overflow-hidden shadow-lg">
        <h1 className="text-black text-shadow-md font-bold text-4xl my-2 py-2 px-4 text-center">
          <span className="text-white">Standard Corporation</span>
        </h1>

        <a href="/about" className="bg-black text-white mt-4 py-2 px-4 rounded-lg">Learn more</a>
      </div>

      <p className="text-gray-800 mt-4">
        We are a leading provider of employment solutions, connecting job seekers with employers in a variety of industries.
      </p>

      <h2 className="text-gray-800 font-bold text-2xl mt-5">Find new opportunities</h2>

      <div className="bg-gray-200 rounded-md p-2 flex items-center mt-5">
        <input
          className="font-bold text-xl flex-1 py-1 px-2 border-none outline-none bg-white text-black"
          type="text"
          placeholder="What are you looking for?"
        />
        <button className="bg-black w-8 h-8 rounded-md flex items-center justify-center">
          <img src="/images/search.png" alt="Search" className="w-4 h-4" />
        </button>
      </div>

      <h2 className="text-gray-800 font-bold text-xl mt-8">Most Popular</h2>

      <div className="flex overflow-x-auto mt-5">
        <div className="flex-shrink-0 bg-white h-96 w-72 rounded-lg p-3 mx-2">
          <img
            src="/images/dev.png"
            alt="Software Developer"
            className="w-16 h-16 rounded-full"
          />
          <div className="flex flex-col mt-4">
            <div className="text-gray-800 font-bold text-lg">Software Developer</div>
            <div className="text-blue-600 font-bold mt-1">Full time</div>
            <div className="text-gray-800 mt-1">Location: San Francisco</div>
            <div className="text-gray-800 mt-1">People Needed: 5</div>
            <div className="text-gray-800 font-bold mt-auto">$50/h</div>
            <button className="bg-black text-white mt-4 py-2 px-4 rounded-lg">
              Apply
            </button>
          </div>
        </div>

        <div className="flex-shrink-0 bg-white h-96 w-72 rounded-lg p-3 mx-2">
          <img
            src="/images/accountant.png"
            alt="Accountant"
            className="w-16 h-16 rounded-full"
          />
          <div className="flex flex-col mt-4">
            <div className="text-gray-800 font-bold text-lg">Accountant</div>
            <div className="text-gray-800 font-bold mt-1">Full time</div>
            <div className="text-gray-800 mt-1">Location: New York</div>
            <div className="text-gray-800 mt-1">People Needed: 3</div>
            <div className="text-gray-800 font-bold mt-auto">$50/h</div>
            <button className="bg-black text-white mt-4 py-2 px-4 rounded-lg">
              Apply
            </button>
          </div>
        </div>

        {/* Add more popular job cards here */}
      </div>

      <h2 className="text-gray-800 font-bold text-xl mt-8">Create an Account</h2>

      <div className="flex justify-center mt-5">
        <button className="bg-gradient-to-r from-purple-400 to-pink-600 text-white font-bold py-2 px-4 rounded-md mx-2">
          Individual
        </button>
        <button className="bg-gradient-to-r from-purple-400 to-pink-600 text-white font-bold py-2 px-4 rounded-md mx-2">
          Company
        </button>
      </div>

      <h2 className="text-gray-800 font-bold text-xl mt-8">Sign In</h2>

      <div className="flex justify-center mt-5">
        <button className="bg-gradient-to-r from-blue-400 to-indigo-600 text-white font-bold py-2 px-4 rounded-md mx-2">
          Sign in with Google
        </button>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-md mx-2">
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default Home;
