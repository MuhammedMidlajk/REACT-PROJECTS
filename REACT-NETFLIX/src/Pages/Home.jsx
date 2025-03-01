import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';


function Home() {
  return (
    <div className='font-bold bg-[#111] w-[150vw] md:w-full'>
      <Navbar />
      <Banner />
     <Footer/>
    </div>
  );
}

export default Home;
