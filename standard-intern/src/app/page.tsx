import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 px-20">
      <h1 className="text-gray-500 mt-40 font-bold">Hello Brad</h1>
      <h2 className="font-extrabold text-2xl mt-13">Find your best jobs</h2>

      <div className="bg-white rounded-5 p-5 flex items-center mt-20">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="font-medium px-5"
        />
        <div className="bg-black w-30 h-30 rounded-8 ml-80 flex items-center justify-center">
          <img src="/images/search.png" alt="Search" />
        </div>
      </div>

      <h2 className="font-extrabold mt-20 text-lg">Most Popular</h2>

      <div className="flex space-x-30 mt-35">
        <div className="bg-white h-200 w-150 rounded-20 mt-35">
          <img src="/images/dev.png" alt="Software Developer" className="w-150 h-150" />
          <button
            className="bg-black h-60 rounded-20 mt--10 px-8 py-8"
            onClick={() => this.props.navigation.navigate('Detail')}
          >
            <span className="text-white font-semibold text-sm">Software Developer</span>
            <div className="flex mt-4">
              <div className="bg-gray-900 px-5 items-center justify-center rounded-5">
                <span className="text-gray-200 font-bold text-sm">Full time</span>
              </div>
              <span className="text-gray-200 font-bold text-sm ml-25">$50/h</span>
            </div>
          </button>
        </div>

        <div className="bg-white h-200 w-150 rounded-20 mt-35 mx-30">
          <img src="/images/accountant.png" alt="Accountant" className="w-150 h-150" />
          <div className="bg-white h-60 rounded-20 mt--10 px-8 py-8">
            <span className="text-black font-semibold text-sm">Accountant</span>
            <div className="flex mt-4">
              <div className="bg-gray-400 px-5 items-center justify-center rounded-5">
                <span className="text-gray-200 font-bold text-sm">Full time</span>
              </div>
              <span className="text-gray-200 font-bold text-sm ml-25">$50/h</span>
            </div>
          </div>
        </div>

        <div className="bg-white h-200 w-150 rounded-20 mt-35">
          <img src="/images/driver.png" alt="Car driver" className="w-150 h-150" />
          <div className="bg-white h-60 rounded-20 mt--10 px-8 py-8">
            <span className="text-black font-semibold text-sm">Car driver</span>
            <div className="flex mt-4">
              <div className="bg-gray-400 px-5 items-center justify-center rounded-5">
                <span className="text-gray-200 font-bold text-sm">Full time</span>
              </div>
              <span className="text-gray-200 font-bold text-sm ml-25">$50/h</span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-extrabold my-20 text-lg">Nearby jobs</h2>

      <div className="bg-white mt-10 flex items-center rounded-10 h-60 px-20">
        <div className="bg-gray-300 rounded-5 h-40 w-40 flex items-center justify-center">
          <img src="/images/pentool.png" alt="Graphic Designer" className="w-40 h-40" />
        </div>

        <div className="px-20">
          <span className="font-extrabold text-sm">Graphic Designer</span>
          <div className="bg-gray-300 rounded-5 w-70 items-center mt-5">
            <span className="font-medium text-black opacity-50">Part time</span>
          </div>
        </div>
        <span className="font-extrabold text-xl ml-40 mt-10">$5/h</span>
      </div>

      <div className="bg-white mt-10 flex items-center rounded-10 h-60 px-20">
        <div className="bg-gray-300 rounded-5 h-40 w-40 flex items-center justify-center">
          <img src="/images/add.png" alt="Nurse" className="w-25 h-25" />
        </div>

        <div className="px-20">
          <span className="font-extrabold text-sm">Nurse</span>
          <div className="bg-gray-300 rounded-5 w-70 items-center mt-5">
            <span className="font-medium text-black opacity-50">Part time</span>
          </div>
        </div>
        <span className="font-extrabold text-xl ml-90 mt-10">$5/h</span>
      </div>

      <div className="bg-white mt-10 flex items-center rounded-10 h-60 px-20">
        <div className="bg-gray-300 rounded-5 h-40 w-40 flex items-center justify-center">
          <img src="/images/dine.png" alt="Sheff" className="w-20 h-20" />
        </div>

        <div className="px-20">
          <span className="font-extrabold text-sm">Sheff</span>
          <div className="bg-gray-300 rounded-5 w-70 items-center mt-5">
            <span className="font-medium text-black opacity-50">Part time</span>
          </div>
        </div>
        <span className="font-extrabold text-xl ml-90 mt-10">$5/h</span>
      </div>

      <div className="bg-white mt-10 flex items-center rounded-10 h-60 px-20">
        <div className="bg-gray-300 rounded-5 h-40 w-40 flex items-center justify-center">
          <img src="/images/sitter.png" alt="Baby Sitter" className="w-30 h-30" />
        </div>

        <div className="px-20">
          <span className="font-extrabold text-sm">Baby Sitter</span>
          <div className="bg-gray-300 rounded-5 w-70 items-center mt-5">
            <span className="font-medium text-black opacity-50">Part time</span>
          </div>
        </div>
        <span className="font-extrabold text-xl ml-85 mt-10">$5/h</span>
      </div>
    </div>
  );
};

export default Home;
