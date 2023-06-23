import Head from 'next/head';

const Home = () => {
  return (
    <div className="bg-gray-200 p-5">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-blue-500 font-bold text-4xl mt-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg">
        Standard Intern
      </h1>

      <h2 className="text-gray-700 font-bold text-2xl mt-5">Find your best places</h2>

      <div className="bg-white rounded-md p-2 flex items-center mt-5">
        <input
          className="font-bold text-xl flex-1 py-1 px-2 border-none outline-none"
          type="text"
          placeholder="What are you looking for?"
        />
        <button className="bg-blue-500 w-8 h-8 rounded-md flex items-center justify-center">
          <img
            src="/images/search.png"
            alt="Search"
            className="w-4 h-4"
          />
        </button>
      </div>

      <h2 className="text-gray-700 font-bold text-xl mt-8">Most Popular</h2>

      <div className="flex overflow-x-auto mt-5">
        <div className="flex-shrink-0 bg-white h-96 w-72 rounded-lg p-3 mx-2">
          <img
            src="/images/dev.png"
            alt="Software Developer"
            className="w-16 h-16 rounded-full"
          />
          <div className="flex flex-col mt-4">
            <div className="text-gray-700 font-bold text-lg">Software Developer</div>
            <div className="text-blue-700 font-bold mt-1">Full time</div>
            <div className="text-gray-700 mt-1">Location: San Francisco</div>
            <div className="text-gray-700 mt-1">People Needed: 5</div>
            <div className="text-gray-700 font-bold mt-auto">$50/h</div>
            <button className="bg-blue-500 text-white mt-4 py-2 px-4 rounded-lg">
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
            <div className="text-gray-700 font-bold text-lg">Accountant</div>
            <div className="text-gray-700 font-bold mt-1">Full time</div>
            <div className="text-gray-700 mt-1">Location: New York</div>
            <div className="text-gray-700 mt-1">People Needed: 3</div>
            <div className="text-gray-700 font-bold mt-auto">$50/h</div>
            <button className="bg-blue-500 text-white mt-4 py-2 px-4 rounded-lg">
              Apply
            </button>
          </div>
        </div>

        <div className="flex-shrink-0 bg-white h-96 w-72 rounded-lg p-3 mx-2">
          <img
            src="/images/driver.png"
            alt="Car Driver"
            className="w-16 h-16 rounded-full"
          />
          <div className="flex flex-col mt-4">
            <div className="text-gray-700 font-bold text-lg">Car driver</div>
            <div className="text-blue-700 font-bold mt-1">Full time</div>
            <div className="text-gray-700 mt-1">Location: Los Angeles</div>
            <div className="text-gray-700 mt-1">People Needed: 2</div>
            <div className="text-gray-700 font-bold mt-auto">$50/h</div>
            <button className="bg-blue-500 text-white mt-4 py-2 px-4 rounded-lg">
              Apply
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-gray-700 font-bold text-xl mt-8">Nearby jobs</h2>

      <div className="mt-5">
        <div className="bg-white rounded-lg flex items-center p-5 mt-3">
          <img
            src="/images/pentool.png"
            alt="Graphic Designer"
            className="w-10 h-10 bg-gray-300 rounded-md flex items-center justify-center"
          />
          <div className="ml-5 flex-1">
            <div className="font-bold text-xl">Graphic Designer</div>
            <div className="flex items-center mt-1">
              <div className="text-gray-700 font-bold mr-2">Company: ABC Designs</div>
              <div className="bg-gray-300 rounded-md flex items-center px-2 py-1">
                <span className="text-gray-700 font-bold">Part time</span>
              </div>
              <div className="text-gray-700 font-bold ml-2">$5/h</div>
            </div>
            <button className="bg-blue-500 text-white mt-4 py-2 px-4 rounded-lg ml-auto">
              Apply
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg flex items-center p-5 mt-3">
          <img
            src="/images/add.png"
            alt="Nurse"
            className="w-10 h-10 bg-gray-300 rounded-md flex items-center justify-center"
          />
          <div className="ml-5 flex-1">
            <div className="font-bold text-xl">Nurse</div>
            <div className="flex items-center mt-1">
              <div className="text-gray-700 font-bold mr-2">Company: XYZ Healthcare</div>
              <div className="bg-gray-300 rounded-md flex items-center px-2 py-1">
                <span className="text-gray-700 font-bold">Part time</span>
              </div>
              <div className="text-gray-700 font-bold ml-2">$10/h</div>
            </div>
            <button className="bg-blue-500 text-white mt-4 py-2 px-4 rounded-lg ml-auto">
              Apply
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg flex items-center p-5 mt-3">
          <img
            src="/images/dine.png"
            alt="Chef"
            className="w-10 h-10 bg-gray-300 rounded-md flex items-center justify-center"
          />
          <div className="ml-5 flex-1">
            <div className="font-bold text-xl">Chef</div>
            <div className="flex items-center mt-1">
              <div className="text-gray-700 font-bold mr-2">Company: Foodie Delights</div>
              <div className="bg-gray-300 rounded-md flex items-center px-2 py-1">
                <span className="text-gray-700 font-bold">Part time</span>
              </div>
              <div className="text-gray-700 font-bold ml-2">$8/h</div>
            </div>
            <button className="bg-blue-500 text-white mt-4 py-2 px-4 rounded-lg ml-auto">
              Apply
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg flex items-center p-5 mt-3">
          <img
            src="/images/sitter.png"
            alt="Baby Sitter"
            className="w-10 h-10 bg-gray-300 rounded-md flex items-center justify-center"
          />
          <div className="ml-5 flex-1">
            <div className="font-bold text-xl">Baby Sitter</div>
            <div className="flex items-center mt-1">
              <div className="text-gray-700 font-bold mr-2">Company: Tiny Tots Care</div>
              <div className="bg-gray-300 rounded-md flex items-center px-2 py-1">
                <span className="text-gray-700 font-bold">Part time</span>
              </div>
              <div className="text-gray-700 font-bold ml-2">$6/h</div>
            </div>
            <button className="bg-blue-500 text-white mt-4 py-2 px-4 rounded-lg ml-auto">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
