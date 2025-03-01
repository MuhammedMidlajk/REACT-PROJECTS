import React, { useRef } from 'react'
import Nav from '../component/Nav'
import c1 from '../assets/images/c1.jpg'
import c2 from '../assets/images/c2.jpg'
import c3 from '../assets/images/c3.jpg'
import prev from '../assets/images/prev.jpg'
import next from '../assets/images/next.jpg'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import Slide from '../component/Slide'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import Footer from '../component/Footer.JSX'
import Abut from '../component/Abut'
import Whtwedo from '../component/Whtwedo'
import Potfolio from '../component/potfolio'
import Contct from '../component/contct'



function Home() {
  const swiperRef = useRef(null); // Create a reference to the Swiper instance
  return (

    <>

      <div className="overflow-hidden">
        <div className="h-screen bg-[url('src/assets/images/background.jpg')] ">
          <Nav />
          <div className="py-52  text-center text-[20px] pt-28 text-white">
            <p className="text-[30px] ">WELCOME TO  </p>
            <p className="md:text-[60px] text-xl md:py-10    ">WEB AGENCY</p>
            <p className="text-[18px] pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>

            <button className="py-2 px-12 text-[17px] bg-white text-black mt-11 rounded-[25px] hover:bg-transparent hover:text-white hover:border-2 hover:border-white" >Contact us</button>


          </div>

        </div>
        <Whtwedo />
        <Abut />
        <Potfolio />
        <div className="md:h-screen flex justify-evenly  flex-col items-center ">
          <div className="md:text-[35px] text-[26px]  font-bold ">
            <p>WHAT CUSTOMERS SAY </p>
          </div>

          <div className=" flex flex-col items-center">
            <Swiper
              ref={swiperRef} // Assign the swiperRef to the Swiper instance
              modules={[Navigation, Autoplay]}
              slidesPerView={3} // Show 3 slides at a time
              spaceBetween={20} // Space between slides
              navigation={false} // Disable default navigation
              autoplay={{ delay: 3000, disableOnInteraction: false }} // Continuous autoplay
              loop={true} // Enable infinite scrolling
              className="w-full max-w-6xl"
            >
              <SwiperSlide>
                <Slide image={c1} />
              </SwiperSlide>
              <SwiperSlide>
                <Slide image={c2} />
              </SwiperSlide>
              <SwiperSlide>
                <Slide image={c3} />
              </SwiperSlide>
              <SwiperSlide>
                <Slide image={c1} />
              </SwiperSlide>
              <SwiperSlide>
                <Slide image={c2} />
              </SwiperSlide>
              <SwiperSlide>
                <Slide image={c3} />
              </SwiperSlide>
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="flex gap-5 md:mt-6 mb-10 ">
              <button
                onClick={() => swiperRef.current.swiper.slidePrev()} // Go to the previous slide
                className=" w-12 bg-black rounded-[50%] flex items-center justify-center"
              >
                <img src={prev} alt="Previous" />
              </button>
              <button
                onClick={() => swiperRef.current.swiper.slideNext()} // Go to the next slide
                className="py-[16px] w-12 bg-black rounded-[50%] flex items-center justify-center"
              >
                <img src={next} alt="Next" />
              </button>
            </div>
          </div>

        </div>
        <div className="py-[52px] bg-[url('src/assets/target-bg.jpg')] flex justify-center  ">
          <div className="w-[80%] h-full flex justify-around flex-col md:flex-row gap-12 md:gap-0 items-center text-white text-center text-[30px] font-bold">
            <div className="l">
              <p>1000+</p>
              <p className='text-[18px] font-thin' > Years of Business </p>
            </div>
            <div className="l">
              <p>20000+</p>
              <p className='text-[18px] font-thin' > Projects Delivered </p>
            </div>
            <div className="l">
              <p>10000+</p>
              <p className='text-[18px] font-thin' > Satidfied Customers </p>
            </div>
            <div className="l">
              <p>1500+</p>
              <p className='text-[18px] font-thin' > Cups of Coffe </p>
            </div>
          </div>
        </div>
        <Contct />

        <Footer />


      </div>

    </>
  )
}

export default Home
