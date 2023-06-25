import Head from 'next/head';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-100 text-black p-5">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-red-400 font-bold text-4xl mt-10 py-2 px-4 rounded-lg text-center">
  Standard Intern
</h1>

      <h2 className="text-gray-800 font-bold text-2xl mt-5">Find your best places</h2>

      <div className="bg-gray-200 rounded-md p-2 flex items-center mt-5">
        <input
          className="font-bold text-xl flex-1 py-1 px-2 border-none outline-none bg-white text-black"
          type="text"
          placeholder="What are you looking for?"
        />
        <button className="bg-black w-8 h-8 rounded-md flex items-center justify-center">
          <img
            src="/images/search.png"
            alt="Search"
            className="w-4 h-4"
          />
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

        <div className="flex-shrink-0 bg-white h-96 w-72 rounded-lg p-3 mx-2">
          <img
            src="/images/driver.png"
            alt="Car Driver"
            className="w-16 h-16 rounded-full"
          />
          <div className="flex flex-col mt-4">
            <div className="text-gray-800 font-bold text-lg">Car driver</div>
            <div className="text-blue-600 font-bold mt-1">Full time</div>
            <div className="text-gray-800 mt-1">Location: Los Angeles</div>
            <div className="text-gray-800 mt-1">People Needed: 2</div>
            <div className="text-gray-800 font-bold mt-auto">$50/h</div>
            <button className="bg-black text-white mt-4 py-2 px-4 rounded-lg">
              Apply
            </button>
          </div>
          
<div className="flex-shrink-0 bg-white h-96 w-72 rounded-lg p-3 mx-2">
  <img
    src="/images/marketing.png"
    alt="Marketing Specialist"
    className="w-16 h-16 rounded-full"
  />
  <div className="flex flex-col mt-4">
    <div className="text-gray-800 font-bold text-lg">Marketing Specialist</div>
    <div className="text-gray-800 font-bold mt-1">Full time</div>
    <div className="text-gray-800 mt-1">Location: London</div>
    <div className="text-gray-800 mt-1">People Needed: 4</div>
    <div className="text-gray-800 font-bold mt-auto">$45/h</div>
    <button className="bg-black text-white mt-4 py-2 px-4 rounded-lg">
      Apply
    </button>
  </div>
</div>

<div className="flex-shrink-0 bg-white h-96 w-72 rounded-lg p-3 mx-2">
  <img
    src="/images/teacher.png"
    alt="Teacher"
    className="w-16 h-16 rounded-full"
  />
  <div className="flex flex-col mt-4">
    <div className="text-gray-800 font-bold text-lg">Teacher</div>
    <div className="text-blue-600 font-bold mt-1">Full time</div>
    <div className="text-gray-800 mt-1">Location: Sydney</div>
    <div className="text-gray-800 mt-1">People Needed: 3</div>
    <div className="text-gray-800 font-bold mt-auto">$55/h</div>
    <button className="bg-black text-white mt-4 py-2 px-4 rounded-lg">
      Apply
    </button>
  </div>
</div>

<div className="flex-shrink-0 bg-white h-96 w-72 rounded-lg p-3 mx-2">
  <img
    src="/images/writer.png"
    alt="Content Writer"
    className="w-16 h-16 rounded-full"
  />
  <div className="flex flex-col mt-4">
    <div className="text-gray-800 font-bold text-lg">Content Writer</div>
    <div className="text-gray-800 font-bold mt-1">Part time</div>
    <div className="text-gray-800 mt-1">Location: Toronto</div>
    <div className="text-gray-800 mt-1">People Needed: 2</div>
    <div className="text-gray-800 font-bold mt-auto">$35/h</div>
    <button className="bg-black text-white mt-4 py-2 px-4 rounded-lg">
      Apply
    </button>
  </div>
</div>

<div className="flex-shrink-0 bg-white h-96 w-72 rounded-lg p-3 mx-2">
  <img
    src="/images/nurse.png"
    alt="Registered Nurse"
    className="w-16 h-16 rounded-full"
  />
  <div className="flex flex-col mt-4">
    <div className="text-gray-800 font-bold text-lg">Registered Nurse</div>
    <div className="text-blue-600 font-bold mt-1">Full time</div>
    <div className="text-gray-800 mt-1">Location: Melbourne</div>
    <div className="text-gray-800 mt-1">People Needed: 5</div>
    <div className="text-gray-800 font-bold mt-auto">$60/h</div>
    <button className="bg-black text-white mt-4 py-2 px-4 rounded-lg">
      Apply
    </button>
  </div>
</div>

<div className="flex-shrink-0 bg-white h-96 w-72 rounded-lg p-3 mx-2">
  <img
    src="/images/chef.png"
    alt="Chef"
    className="w-16 h-16 rounded-full"
  />
  <div className="flex flex-col mt-4">
    <div className="text-gray-800 font-bold text-lg">Chef</div>
    <div className="text-gray-800 font-bold mt-1">Full time</div>
    <div className="text-gray-800 mt-1">Location: Paris</div>
    <div className="text-gray-800 mt-1">People Needed: 4</div>
    <div className="text-gray-800 font-bold mt-auto">$50/h</div>
    <button className="bg-black text-white mt-4 py-2 px-4 rounded-lg">
      Apply
    </button>
  </div> 
    </div>
      </div>

      <h2 className="text-gray-800 font-bold text-xl mt-8">Nearby jobs</h2>

      <div className="mt-5">
        <div className="bg-white rounded-lg flex items-center p-5 mt-3">
          <img
            src="/images/company1_logo.png"
            alt="Company Logo"
            className="w-16 h-16 rounded-full"
          />
          <div className="flex-1 ml-5">
            <div className="font-bold text-xl">Graphic Designer</div>
            <div className="flex items-center mt-1">
              <div className="text-gray-800 font-bold mr-2">Company: ABC Designs</div>
              <div className="bg-gray-200 rounded-md flex items-center px-2 py-1">
              </div>
              <div className="text-gray-800 font-bold mt-1">$5/h</div>
            </div>
          </div>
          <button className="bg-black text-white mt-4 py-2 px-4 rounded-lg ml-auto">
            Apply
          </button>
        </div>

        <div className="bg-white rounded-lg flex items-center p-5 mt-3">
          <img
            src="/images/company2_logo.png"
            alt="Company Logo"
            className="w-16 h-16 rounded-full"
          />
          <div className="flex-1 ml-5">
            <div className="font-bold text-xl">Nurse</div>
            <div className="flex items-center mt-1">
              <div className="text-gray-800 font-bold mr-2">Company: XYZ Healthcare</div>
              <div className="bg-gray-200 rounded-md flex items-center px-2 py-1">
              </div>
              <div className="text-gray-800 font-bold mt-1">$10/h</div>
            </div>
          </div>
          <button className="bg-black text-white mt-4 py-2 px-4 rounded-lg ml-auto">
            Apply
          </button>
        </div>

        <div className="bg-white rounded-lg flex items-center p-5 mt-3">
          <img
            src="/images/company3_logo.png"
            alt="Company Logo"
            className="w-16 h-16 rounded-full"
          />
          <div className="flex-1 ml-5">
            <div className="font-bold text-xl">Chef</div>
            <div className="flex items-center mt-1">
              <div className="text-gray-800 font-bold mr-2">Company: Foodie Delights</div>
              <div className="bg-gray-200 rounded-md flex items-center px-2 py-1">
              </div>
              <div className="text-gray-800 font-bold mt-1">$8/h</div>
            </div>
          </div>
          <button className="bg-black text-white mt-4 py-2 px-4 rounded-lg ml-auto">
            Apply
          </button>
        </div>

        <div className="bg-white rounded-lg flex items-center p-5 mt-3">
          <img
            src="/images/company4_logo.png"
            alt="Company Logo"
            className="w-16 h-16 rounded-full"
          />
          <div className="flex-1 ml-5">
            <div className="font-bold text-xl">Baby Sitter</div>
            <div className="flex items-center mt-1">
              <div className="text-gray-800 font-bold mr-2">Company: Tiny Tots Care</div>
              <div className="bg-gray-200 rounded-md flex items-center px-2 py-1">
              </div>
              <div className="text-gray-800 font-bold mt-1">$6/h</div>
            </div>
          </div>
          <button className="bg-black text-white mt-4 py-2 px-4 rounded-lg ml-auto">
            Apply
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
