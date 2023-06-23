import Head from 'next/head';

const Home = () => {
  return (
    <div className="bg-gray-200 p-5">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-gray-700 font-bold text-3xl mt-10">Hello Brad</h1>

      <h2 className="text-gray-700 font-bold text-2xl mt-3">Find your best jobs</h2>

      <div className="bg-white rounded-md p-2 flex items-center mt-5">
        <input
          className="font-bold text-xl flex-1 py-1 px-2 border-none outline-none"
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

      <h2 className="text-gray-700 font-bold text-xl mt-8">Most Popular</h2>

      <div className="flex justify-between mt-5">
        <div className="bg-white h-60 w-40 rounded-lg">
          <img
            src="/images/dev.png"
            alt="Software Developer"
            className="w-40 h-40"
          />
          <div className="bg-black h-16 rounded-b-lg p-2">
            <div className="text-white font-bold text-sm">Software Developer</div>
            <div className="flex items-center mt-1">
              <div className="bg-gray-800 rounded-md p-1">
                <span className="text-white font-bold">Full time</span>
              </div>
              <div className="ml-auto text-gray-700 font-bold">$50/h</div>
            </div>
          </div>
        </div>

        <div className="bg-white h-60 w-40 rounded-lg">
          <img
            src="/images/accountant.png"
            alt="Accountant"
            className="w-40 h-40"
          />
          <div className="bg-black h-16 rounded-b-lg p-2">
            <div className="text-white font-bold text-sm">Accountant</div>
            <div className="flex items-center mt-1">
              <div className="bg-gray-300 rounded-md p-1">
                <span className="text-gray-700 font-bold">Full time</span>
              </div>
              <div className="ml-auto text-gray-700 font-bold">$50/h</div>
            </div>
          </div>
        </div>

        <div className="bg-white h-60 w-40 rounded-lg">
          <img
            src="/images/driver.png"
            alt="Car Driver"
            className="w-40 h-40"
          />
          <div className="bg-black h-16 rounded-b-lg p-2">
            <div className="text-white font-bold text-sm">Car driver</div>
            <div className="flex items-center mt-1">
              <div className="bg-gray-300 rounded-md p-1">
                <span className="text-gray-700 font-bold">Full time</span>
              </div>
              <div className="ml-auto text-gray-700 font-bold">$50/h</div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-gray-700 font-bold text-xl mt-8">Nearby jobs</h2>

      <div className="mt-5">
        <div className="bg-white rounded-lg h-16 flex items-center p-5 mt-3">
          <img
            src="/images/pentool.png"
            alt="Graphic Designer"
            className="w-10 h-10 bg-gray-300 rounded-md flex items-center justify-center"
          />
          <div className="ml-5">
            <div className="font-bold text-xl">Graphic Designer</div>
            <div className="bg-gray-300 rounded-md w-20 flex items-center mt-1 p-1">
              <span className="text-gray-700 font-bold">Part time</span>
            </div>
          </div>
          <div className="ml-auto text-gray-700 font-bold">$5/h</div>
        </div>

        <div className="bg-white rounded-lg h-16 flex items-center p-5 mt-3">
          <img
            src="/images/add.png"
            alt="Nurse"
            className="w-10 h-10 bg-gray-300 rounded-md flex items-center justify-center"
          />
          <div className="ml-5">
            <div className="font-bold text-xl">Nurse</div>
            <div className="bg-gray-300 rounded-md w-20 flex items-center mt-1 p-1">
              <span className="text-gray-700 font-bold">Part time</span>
            </div>
          </div>
          <div className="ml-auto text-gray-700 font-bold">$5/h</div>
        </div>

        <div className="bg-white rounded-lg h-16 flex items-center p-5 mt-3">
          <img
            src="/images/dine.png"
            alt="Chef"
            className="w-10 h-10 bg-gray-300 rounded-md flex items-center justify-center"
          />
          <div className="ml-5">
            <div className="font-bold text-xl">Chef</div>
            <div className="bg-gray-300 rounded-md w-20 flex items-center mt-1 p-1">
              <span className="text-gray-700 font-bold">Part time</span>
            </div>
          </div>
          <div className="ml-auto text-gray-700 font-bold">$5/h</div>
        </div>

        <div className="bg-white rounded-lg h-16 flex items-center p-5 mt-3">
          <img
            src="/images/sitter.png"
            alt="Baby Sitter"
            className="w-10 h-10 bg-gray-300 rounded-md flex items-center justify-center"
          />
          <div className="ml-5">
            <div className="font-bold text-xl">Baby Sitter</div>
            <div className="bg-gray-300 rounded-md w-20 flex items-center mt-1 p-1">
              <span className="text-gray-700 font-bold">Part time</span>
            </div>
          </div>
          <div className="ml-auto text-gray-700 font-bold">$5/h</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
