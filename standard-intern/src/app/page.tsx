import React from 'react';
import Head from 'next/head';


const Home = () => {
  return (
    <div className="bg-gray-200 px-20">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-gray-500 mt-40 font-bold">Hello Brad</div>

      <div className="font-extrabold text-2xl mt-13">Find your best jobs</div>

      <div className="bg-white rounded-5 p-5 flex items-center mt-20">
        <input
          className="font-medium px-5"
          type="text"
          placeholder="What are you looking for?"
        />
        <div className="bg-black w-30 h-30 rounded-8 ml-80 flex items-center justify-center">
          <img src="/images/search.png" alt="Search" className="w-20 h-20" />
        </div>
      </div>

      <div className="font-extrabold mt-20 text-lg">Most Popular</div>

      <div className="flex space-x-30 mt-35">
        <div className="bg-white h-200 w-150 rounded-20">
          <img
            src="/images/dev.png"
            alt="Software Developer"
            className="w-150 h-150"
          />
          <div className="bg-black h-60 rounded-20 mt--10 px-8 py-8">
            <div className="text-white font-semibold text-sm">
              Software Developer
            </div>
            <div className="flex items-center mt-4">
              <div className="bg-gray-900 rounded-5 px-5 items-center">
                <span className="text-white font-bold text-sm">Full time</span>
              </div>
              <span className="text-gray-500 font-bold text-sm ml-25">
                $50/h
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white h-200 w-150 rounded-20">
          <img
            src="/images/accountant.png"
            alt="Accountant"
            className="w-150 h-150"
          />
          <div className="bg-white h-60 rounded-20 mt--10 px-8 py-8">
            <div className="text-black font-semibold text-sm">Accountant</div>
            <div className="flex items-center mt-4">
              <div className="bg-gray-300 rounded-5 px-5 items-center">
                <span className="text-gray-500 font-bold text-sm">Full time</span>
              </div>
              <span className="text-gray-500 font-bold text-sm ml-25">
                $50/h
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white h-200 w-150 rounded-20">
          <img
            src="/images/driver.png"
            alt="Car Driver"
            className="w-150 h-150"
          />
          <div className="bg-white h-60 rounded-20 mt--10 px-8 py-8">
            <div className="text-black font-semibold text-sm">Car driver</div>
            <div className="flex items-center mt-4">
              <div className="bg-gray-300 rounded-5 px-5 items-center">
                <span className="text-gray-500 font-bold text-sm">Full time</span>
              </div>
              <span className="text-gray-500 font-bold text-sm ml-25">
                $50/h
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="font-extrabold my-20 text-lg">Nearby jobs</div>

      <div className="bg-white mt-10 flex rounded-10 h-60 items-center px-20">
        <div className="bg-gray-300 rounded-5 h-40 w-40 flex items-center justify-center">
          <img
            src="/images/pentool.png"
            alt="Graphic Designer"
            className="w-40 h-40"
          />
        </div>

        <div className="px-20">
          <div className="font-extrabold text-sm">Graphic Designer</div>
          <div className="bg-gray-300 rounded-5 w-70 items-center mt-5">
            <span className="font-medium text-black opacity-50">
              Part time
            </span>
          </div>
        </div>
        <div className="font-extrabold text-xl ml-auto mt-10">$5/h</div>
      </div>

      <div className="bg-white mt-10 flex rounded-10 h-60 items-center px-20">
        <div className="bg-gray-300 rounded-5 h-40 w-40 flex items-center justify-center">
          <img src="/images/add.png" alt="Nurse" className="w-25 h-25" />
        </div>

        <div className="px-20">
          <div className="font-extrabold text-sm">Nurse</div>
          <div className="bg-gray-300 rounded-5 w-70 items-center mt-5">
            <span className="font-medium text-black opacity-50">
              Part time
            </span>
          </div>
        </div>
        <div className="font-extrabold text-xl ml-90 mt-10">$5/h</div>
      </div>

      <div className="bg-white mt-10 flex rounded-10 h-60 items-center px-20">
        <div className="bg-gray-300 rounded-5 h-40 w-40 flex items-center justify-center">
          <img src="/images/dine.png" alt="Chef" className="w-20 h-20" />
        </div>

        <div className="px-20">
          <div className="font-extrabold text-sm">Chef</div>
          <div className="bg-gray-300 rounded-5 w-70 items-center mt-5">
            <span className="font-medium text-black opacity-50">
              Part time
            </span>
          </div>
        </div>
        <div className="font-extrabold text-xl ml-90 mt-10">$5/h</div>
      </div>

      <div className="bg-white mt-10 flex rounded-10 h-60 items-center px-20">
        <div className="bg-gray-300 rounded-5 h-40 w-40 flex items-center justify-center">
          <img
            src="/images/sitter.png"
            alt="Baby Sitter"
            className="w-30 h-30"
          />
        </div>

        <div className="px-20">
          <div className="font-extrabold text-sm">Baby Sitter</div>
          <div className="bg-gray-300 rounded-5 w-70 items-center mt-5">
            <span className="font-medium text-black opacity-50">
              Part time
            </span>
          </div>
        </div>
        <div className="font-extrabold text-xl ml-85 mt-10">$5/h</div>
      </div>
    </div>
  );
}

export default Home;
