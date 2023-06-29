"use client";


import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 fixed top-0 left-0 right-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-white font-bold">STANDARD</span>
            </div>
          </div>
          <div>
            <button
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className={`md:hidden fixed inset-y-0 left-0 w-1/2 bg-gray-800 z-50 transform transition-transform ease-in-out duration-300 ${isMenuOpen ? '-translate-x-0' : '-translate-x-full'}`}>
            <div className="flex items-center justify-between px-4 py-3">
              {/* Menu heading */}
              <h2 className="text-white text-2xl font-bold">Menu</h2>
              <button
                className="text-gray-300 hover:text-white focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* Menu items */}
            <ul className="flex flex-col items-start h-full pt-8 space-y-4 overflow-y-auto px-4">
              <li>
                <a className="text-gray-300 hover:text-white text-lg font-medium" href="#">
                  <span className="mr-2">&#9679;</span> Home
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white text-lg font-medium" href="#">
                  <span className="mr-2">&#9679;</span> My Network
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white text-lg font-medium" href="#">
                  <span className="mr-2">&#9679;</span> Explore Opportunities
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white text-lg font-medium" href="#">
                  <span className="mr-2">&#9679;</span> Messaging
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white text-lg font-medium" href="#">
                  <span className="mr-2">&#9679;</span> Notifications
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white text-lg font-medium" href="#">
                  <span className="mr-2">&#9679;</span> My Profile
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white text-lg font-medium" href="#">
                  <span className="mr-2">&#9679;</span> Connections
                </a>
                <ul className="pl-4 space-y-2">
                  <li>
                    <a className="text-gray-300 hover:text-white text-lg font-medium" href="#">
                      <span className="mr-2">&#9679;</span> Find Alumni
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-300 hover:text-white text-lg font-medium" href="#">
                      <span className="mr-2">&#9679;</span> People You May Know
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-300 hover:text-white text-lg font-medium" href="#">
                      <span className="mr-2">&#9679;</span> Add Connections
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-300 hover:text-white text-lg font-medium" href="#">
                      <span className="mr-2">&#9679;</span> Contacts
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-300 hover:text-white text-lg font-medium" href="#">
                      <span className="mr-2">&#9679;</span> Groups
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-300 hover:text-white text-lg font-medium" href="#">
                      <span className="mr-2">&#9679;</span> Events
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-300 hover:text-white text-lg font-medium" href="#">
                      <span className="mr-2">&#9679;</span> Companies
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-300 hover:text-white text-lg font-medium" href="#">
                      <span className="mr-2">&#9679;</span> Hashtags
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
