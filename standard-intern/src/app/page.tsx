export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="flex justify-between w-full mb-8">
        {/* Company logo */}
        <img src="/logo.png" alt="Standard Intern" className="w-12 h-12" />
        {/* Navigation menu */}
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#search">Search</a></li>
            <li><a href="#featured">Featured</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#resources">Resources</a></li>
          </ul>
        </nav>
      </header>

      <section className="text-center">
        <h1 className="text-4xl font-extrabold bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent capitalize">
          Standard Intern Pro
        </h1>
        <p className="text-4xl font-extrabold bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500 text-transparent capitalize">
          The Standard Corporation.
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
          <button className="mt-2 bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600">
            Search
          </button>
        </div>
        {/* Categories */}
        <div className="flex space-x-4 mt-4">
          <button className="bg-gray-200 text-gray-800 rounded-md py-1 px-2 hover:bg-gray-300">
            Technology
          </button>
          <button className="bg-gray-200 text-gray-800 rounded-md py-1 px-2 hover:bg-gray-300">
            Finance
          </button>
          <button className="bg-gray-200 text-gray-800 rounded-md py-1 px-2 hover:bg-gray-300">
            Marketing
          </button>
          <button className="bg-gray-200 text-gray-800 rounded-md py-1 px-2 hover:bg-gray-300">
            Location
          </button>
        </div>
      </section>

      <section id="featured" className="my-12">
        <h2 className="text-2xl font-bold mb-4">Featured Internships</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Display featured internships as cards */}
          <div className="bg-white shadow-md rounded-md p-4">
            <h3 className="text-lg font-bold">Internship Title 1</h3>
            <p className="text-gray-600">Duration: 3 months</p>
            <p className="text-gray-600">Location: New York</p>
            <p className="text-gray-600">Eligibility: Open to all</p>
          </div>
          <div className="bg-white shadow-md rounded-md p-4">
            <h3 className="text-lg font-bold">Internship Title 2</h3>
            <p className="text-gray-600">Duration: 6 months</p>
            <p className="text-gray-600">Location: San Francisco</p>
            <p className="text-gray-600">Eligibility: Students only</p>
          </div>
          <div className="bg-white shadow-md rounded-md p-4">
            <h3 className="text-lg font-bold">Internship Title 3</h3>
            <p className="text-gray-600">Duration: 4 months</p>
            <p className="text-gray-600">Location: London</p>
            <p className="text-gray-600">Eligibility: Open to all</p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="my-12">
        <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Display testimonials */}
          <div className="bg-white shadow-md rounded-md p-4">
            <p className="text-gray-600">
              "Standard Intern helped me find the perfect internship that aligned with my career goals. I highly recommend their services!"
            </p>
            <p className="text-gray-800 font-semibold mt-2">John Doe</p>
            <p className="text-gray-600">Intern at ABC Company</p>
          </div>
          <div className="bg-white shadow-md rounded-md p-4">
            <p className="text-gray-600">
              "Thanks to Standard Intern, I got hands-on experience and valuable industry insights during my internship. It was a game-changer for my career."
            </p>
            <p className="text-gray-800 font-semibold mt-2">Jane Smith</p>
            <p className="text-gray-600">Intern at XYZ Inc.</p>
          </div>
          <div className="bg-white shadow-md rounded-md p-4">
            <p className="text-gray-600">
              "Standard Intern provided me with personalized guidance and support throughout the application process. They truly care about their users' success."
            </p>
            <p className="text-gray-800 font-semibold mt-2">David Johnson</p>
            <p className="text-gray-600">Intern at DEF Corp.</p>
          </div>
        </div>
      </section>

      <section id="resources" className="my-12">
        <h2 className="text-2xl font-bold mb-4">Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Display resources */}
          <div className="bg-white shadow-md rounded-md p-4">
            <h3 className="text-lg font-bold">Resume Writing Guide</h3>
            <p className="text-gray-600">Learn how to create an impressive resume that stands out to employers.</p>
            <a href="/resume_guide.pdf" className="text-blue-500 hover:underline">Download</a>
          </div>
          <div className="bg-white shadow-md rounded-md p-4">
            <h3 className="text-lg font-bold">Interview Preparation Tips</h3>
            <p className="text-gray-600">Get ready for your internship interviews with these helpful tips and tricks.</p>
            <a href="/interview_tips.pdf" className="text-blue-500 hover:underline">Download</a>
          </div>
          <div className="bg-white shadow-md rounded-md p-4">
            <h3 className="text-lg font-bold">Making the Most of Your Internship</h3>
            <p className="text-gray-600">Discover strategies to maximize your learning and growth during your internship.</p>
            <a href="/internship_guide.pdf" className="text-blue-500 hover:underline">Download</a>
          </div>
        </div>
      </section>

      <footer className="text-center">
        <ul className="flex justify-center space-x-4">
          {/* Footer links */}
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
        </ul>
        {/* Social media icons */}
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm-1 15.814v-5.814h-2v-2h2v-1.623c0-2.587 1.977-4.576 4.563-4.576h3.145v2h-2.982c-1.096 0-1.581.847-1.581 1.623v1.952h2.523l-.391 2h-2.132v5.814h-2z" />
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 2H3C1.89543 2 1 2.89543 1 4V20C1 21.1046 1.89543 22 3 22H21C22.1046 22 23 21.1046 23 20V4C23 2.89543 22.1046 2 21 2ZM21 20H3V9H21V20ZM12 4C9.23858 4 7 6.23858 7 9V10H9V9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9V10H17V9C17 6.23858 14.7614 4 12 4Z" />
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4ZM21 18H3V8H21V18ZM9 12H7V14H9V12ZM11 12H13V14H11V12ZM15 12H17V14H15V12Z" />
            </svg>
          </a>
        </div>
      </footer>
    </main>
  );
}
