"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-10 sm:mt-10 bg-gray-800">
      <div className="max-w-6xl m-auto text-gray-500 flex flex-wrap justify-left">
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Navigation
          </div>
          <a href="/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Home
          </a>
          <a href="/legal" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Legal
          </a>
          <a href="/about" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            About
          </a>
          <a href="/contact" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Contact
          </a>
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Contact Us
          </div>
          <div className="my-3 block text-gray-300 hover:text-white text-sm font-medium duration-700 cursor-pointer">
            <a href="mailto:standardinternofficial@gmail.com">
              Email: standardinternofficial@gmail.com
            </a>
          </div>
          <div className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            <a href="tel:+256 708163155">Phone: +256 708163155</a>
          </div>
        </div>
      </div>
      <div className="p-2 text-gray-300 text-center text-sm">
        <a href="/legal" className="text-gray-500 hover:text-gray-300">
          Privacy Policy
        </a>{' '}
        |{' '}
        <a href="/legal" className="text-gray-500 hover:text-gray-300">
          Terms of Service
        </a>{' '}
        |{' '}
        <a href="/contact" className="text-gray-500 hover:text-gray-300">
          Contact Us
        </a>{' '}
        |{' '}
        <a href="/legal" className="text-gray-500 hover:text-gray-300">
          Legal
        </a>
      </div>

      <div className="pt-2">
        <div className="flex pb-5 px-5 justify-center text-gray-400">
          <p>© 2023 Standard Intern. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
