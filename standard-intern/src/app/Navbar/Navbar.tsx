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
              <span className="text-white font-bold">use client</span>
            </div>
          </div>
          <div className="md:hidden">
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
          <div className={`md:hidden fixed inset-y-0 right-0 w-1/2 bg-gray-800 z-50 transform transition-transform ease-in-out duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* Menu items */}
            <ul className="flex flex-col items-start h-full pt-16 space-y-4 px-4">
              <li>
                <a className="text-gray-300 hover:text-white text-base font-medium" href="#">
                  Menu Item 1
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white text-base font-medium" href="#">
                  Menu Item 2
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white text-base font-medium" href="#">
                  Menu Item 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
