"use client";
import React, { useState } from 'react';
import Logo from './Logo';
import MenuItem from './MenuItem';
import Search from './Search';

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
            <Logo /> {/* Include the Logo component */}
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
          <div className={`hidden md:flex ${isMenuOpen ? 'flex' : 'hidden'}`}>
            <MenuItem onClick={toggleMenu} label="Home" /> {/* Include the MenuItem component for each menu item */}
            <MenuItem onClick={toggleMenu} label="About" />
            <MenuItem onClick={toggleMenu} label="Services" />
            <MenuItem onClick={toggleMenu} label="Contact" />
          </div>
        </div>
        {isMenuOpen && (
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <MenuItem onClick={toggleMenu} label="Home" /> {/* Include the MenuItem component for each menu item */}
              <MenuItem onClick={toggleMenu} label="About" />
              <MenuItem onClick={toggleMenu} label="Services" />
              <MenuItem onClick={toggleMenu} label="Contact" />
            </div>
          </div>
        )}
      </div>
      <Search /> {/* Include the Search component */}
    </nav>
  );
};

export default Navbar;
