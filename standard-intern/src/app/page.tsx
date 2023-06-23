import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <header className="flex justify-between w-full mb-8">
        {/* Company logo */}
        <img src="/logo.png" alt="Standard Intern" className="w-12 h-12" />
        {/* Navigation menu */}
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#search" className="text-white">Search</a></li>
            <li><a href="#featured" className="text-white">Featured</a></li>
            <li><a href="#testimonials" className="text-white">Testimonials</a></li>
            <li><a href="#resources" className="text-white">Resources</a></li>
          </ul>
        </nav>
      </header>

      <section className="text-center">
        <h1 className="text-4xl font-extrabold bg-clip-text bg-gradient-to-r from-red-600 to-red-900 text-transparent capitalize">
          Standard Intern Pro
        </h1>
        <p className="text-4xl font-extrabold bg-clip-text bg-gradient-to-r from-red-400 to-red-700 text-transparent capitalize">
          Be Part of the Artistic Beauty.
        </p>
      </section>

      <section id="search" className="flex flex-col items-center my-12">
        {/* Search bar */}
        <div className="w-64">
          <input
            type="text"
            placeholder="Search internships or training programs"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {/* Search button */}
          <button className="mt-2 bg-red-500 text-white rounded-md py-2 px-4 hover:bg-red-600">
            Search
          </button>
        </div>
        {/* Categories */}
        <div className="flex space-x-4 mt-4">
          <button className="bg-red-800 text-white rounded-md py-1 px-2 hover:bg-red-700">
            Technology
          </button>
          <button className="bg-red-800 text-white rounded-md py-1 px-2 hover:bg-red-700">
            Finance
          </button>
          <button className="bg-red-800 text-white rounded-md py-1 px-2 hover:bg-red-700">
            Marketing
          </button>
          <button className="bg-red-800 text-white rounded-md py-1 px-2 hover:bg-red-700">
            Location
          </button>
        </div>
      </section>

      <section id="featured" className="my-12">
        <h2 className="text-2xl font-bold mb-4 text-white">Featured Internships</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Display featured internships as cards */}
          <div className="bg-red-900 shadow-md rounded-md p-4">
            <h3 className="text-lg font-bold text-white">Internship Title 1</h3>
            <p className="text-gray-300">Duration: 3 months</p>
            <p className="text-gray-300">Location: New York</p>
            <p className="text-gray-300">Eligibility: Open to all</p>
          </div>
          <div className="bg-red-900 shadow-md rounded-md p-4">
            <h3 className="text-lg font-bold text-white">Internship Title 2</h3>
            <p className="text-gray-300">Duration: 6 months</p>
            <p className="text-gray-300">Location: San Francisco</p>
            <p className="text-gray-300">Eligibility: Students only</p>
          </div>
          <div className="bg-red-900 shadow-md rounded-md p-4">
            <h3 className="text-lg font-bold text-white">Internship Title 3</h3>
            <p className="text-gray-300">Duration: 4 months</p>
            <p className="text-gray-300">Location: London</p>
            <p className="text-gray-300">Eligibility: Open to all</p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="my-12">
        <h2 className="text-2xl font-bold mb-4 text-white">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Display testimonials */}
          <div className="bg-red-900 shadow-md rounded-md p-4">
            <p className="text-gray-300">
              "Standard Intern helped me find the perfect internship that aligned with my career goals. I highly recommend their services!"
            </p>
            <p className="text-gray-500 font-semibold mt-2">John Doe</p>
            <p className="text-gray-300">Intern at ABC Company</p>
          </div>
          <div className="bg-red-900 shadow-md rounded-md p-4">
            <p className="text-gray-300">
              "Thanks to Standard Intern, I got hands-on experience and valuable industry insights during my internship. It was a game-changer for my career."
            </p>
            <p className="text-gray-500 font-semibold mt-2">Jane Smith</p>
            <p className="text-gray-300">Intern at XYZ Inc.</p>
          </div>
          <div className="bg-red-900 shadow-md rounded-md p-4">
            <p className="text-gray-300">
              "Standard Intern provided me with personalized guidance and support throughout the application process. They truly care about their users' success."
            </p>
            <p className="text-gray-500 font-semibold mt-2">David Johnson</p>
            <p className="text-gray-300">Intern at DEF Corp.</p>
          </div>
        </div>
      </section>

      <section id="resources" className="my-12">
        <h2 className="text-2xl font-bold mb-4 text-white">Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Display resources */}
          <div className="bg-red-900 shadow-md rounded-md p-4">
            <h3 className="text-lg font-bold text-white">Resume Writing Guide</h3>
            <p className="text-gray-300">Learn how to create an impressive resume that stands out to employers.</p>
            <a href="/resume_guide.pdf" className="text-blue-500 hover:underline">Download</a>
          </div>
          <div className="bg-red-900 shadow-md rounded-md p-4">
            <h3 className="text-lg font-bold text-white">Interview Preparation Tips</h3>
            <p className="text-gray-300">Get ready for your internship interviews with these helpful tips and tricks.</p>
            <a href="/interview_tips.pdf" className="text-blue-500 hover:underline">Download</a>
          </div>
          <div className="bg-red-900 shadow-md rounded-md p-4">
            <h3 className="text-lg font-bold text-white">Making the Most of Your Internship</h3>
            <p className="text-gray-300">Discover strategies to maximize your learning and growth during your internship.</p>
            <a href="/internship_guide.pdf" className="text-blue-500 hover:underline">Download</a>
          </div>
        </div>
      </section>

      <footer className="text-center">
        <ul className="flex justify-center space-x-4">
          {/* Footer links */}
          <li><a href="/about" className="text-white">About Us</a></li>
          <li><a href="/contact" className="text-white">Contact Us</a></li>
          <li><a href="/privacy" className="text-white">Privacy Policy</a></li>
          <li><a href="/terms" className="text-white">Terms of Service</a></li>
        </ul>
        {/* Social media icons */}
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-gray-300 hover:text-red-500">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm-1 15.814v-5.814h-2v-2h2v-1.623c0-2.587 1.977-4.576 4.563-4.576h3.145v2h-2.982c-1.096 0-1.581.847-1.581 1.623v1.952h2.523l-.391 2h-2.132v5.814h-2z" />
            </svg>
          </a>
          <a href="#" className="text-gray-300 hover:text-red-500">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 2H3C1.89543 2 1 2.89543 1 4V20C1 21.1046 1.89543 22 3 22H21C22.1046 22 23 21.1046 23 20V4C23 2.89543 22.1046 2 21 2ZM21 20H3V9H21V20ZM12 4C9.23858 4 7 6.23858 7 9V10H9V9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9V10H17V9C17 6.23858 14.7614 4 12 4ZM17 15L14.8536 12.8536L13.4393 14.2679L15.1716 16H14V18H18V14H16.8284L18.5607 12.2679L17.1464 10.8536L15 13V10H13V13L15.1464 10.8536L13.7321 9.43934L12 11.1716L10.2679 9.43934L8.85355 10.8536L11 13V10H9V13L11.1716 10.8536L12 11.6823L12.8284 10.8536L11.4142 9.43934L10 10.8536L12.1464 13H10V15H13.1716L10.4393 17.7321L11.8536 19.1464L14 16.9999V19H16V16.9999L18.1464 19.1464L19.5607 17.7321L17.7321 15.9035L17 16.635L17 15Z" />
            </svg>
          </a>
          <a href="#" className="text-gray-300 hover:text-red-500">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">   
         </svg>
          </a>
        </div>
      </footer>
    </main>
  );
}
