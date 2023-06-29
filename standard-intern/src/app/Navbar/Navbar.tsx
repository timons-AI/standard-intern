"use client";

import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-white font-bold">Standard</span>
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={toggleMenu}
            >Button
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
          <div className={`hidden md:flex ${isMenuOpen ? 'flex' : 'hidden'}`}>
            {/* Menu items */}
            <ul className="md:flex items-center space-x-4">
              <li>
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#">
                  Menu Item 1
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#">
                  Menu Item 2
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#">
                  Menu Item 3
                </a>
              </li>
            </ul>
          </div>
        </div>
        {isMenuOpen && (
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            {/* Side menu items */}
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="#">
                Menu Item 1
              </a>
              <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="#">
                Menu Item 2
              </a>
              <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="#">
                Menu Item 3
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
