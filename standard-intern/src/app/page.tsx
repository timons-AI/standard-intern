"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from './Components/Navbar/Navbar';
import RegisterUserModal from './Modals/RegisterUserModal';
import RegisterCompanyModal from './Modals/RegisterCompanyModal';
import { LoginButton } from '@/components/auth';
import Footer from './Components/Footer';

const Home = () => {
  const [isUserModalOpen, setUserModalOpen] = useState(false);
  const [isCompanyModalOpen, setCompanyModalOpen] = useState(false);

  const openUserModal = () => {
    setUserModalOpen(true);
  };

  const closeUserModal = () => {
    setUserModalOpen(false);
  };

  const openCompanyModal = () => {
    setCompanyModalOpen(true);
  };

  const closeCompanyModal = () => {
    setCompanyModalOpen(false);
  };

  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-100 text-black p-5">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="card bg-gradient-diagonal-orange rounded-lg overflow-hidden shadow-lg my-8 mt-16">
        <h1 className="text-black text-shadow-md font-bold text-4xl my-2 py-2 px-4 text-center">
          <span className="text-white">Standard Corporation</span>
        </h1>
      </div>

      <p className="text-gray-800 mt-4">
        We are a leading provider of employment solutions, connecting job seekers with employers in a variety of industries. Our mission is to simplify the process of finding and hiring top talent while helping individuals discover meaningful career opportunities.
      </p>

      <div className="mt-8">
        <h2 className="text-gray-800 font-bold text-xl">Why Choose Standard Corporation?</h2>
        <ul className="list-disc list-inside mt-4">
          <li className="text-gray-800">Access to a vast network of job opportunities across various industries.</li>
          <li className="text-gray-800">Efficient and streamlined hiring process for employers.</li>
          <li className="text-gray-800">Personalized job recommendations based on your skills and preferences.</li>
          <li className="text-gray-800">Dedicated support from our team of career experts.</li>
          <li className="text-gray-800">Innovative technology platform for seamless job matching.</li>
          <li className="text-gray-800">Trusted by millions of individuals and companies worldwide.</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-gray-800 font-bold text-xl">Join Standard Corporation Today</h2>
        <p className="text-gray-800 mt-4">
          Whether you're a job seeker looking for your dream role or a company seeking top talent, Standard Corporation is here to help. Sign up now and experience the future of employment solutions.
        </p>

        <div className="border border-black p-2 m-3 rounded">
          <LoginButton />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
