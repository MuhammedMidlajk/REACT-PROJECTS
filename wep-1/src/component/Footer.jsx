import React from 'react'
import location from '../assets/images/location.jpg'
import email from '../assets/images/email.jpg'
import telephone from '../assets/images/telephone.jpg'
import fb from '../assets/images/fb.jpg'
import linkedin from '../assets/images/linkedin.jpg'
import youtube from '../assets/images/youtube.jpg'
import twitter from '../assets/images/twitter.jpg'
import face from '../assets/images/face.jpg'

function Footer() {
    return (
        <div className="py-6 bg-slate-800 flex flex-col justify-center  items-center text-white mt-5 md:mt-0 ">
            <div className=" flex flex-col md:flex-row items-center  gap-10 justify-evenly md:items-start">

                <div className=" w-60 flex gap-5 justify-evenly  flex-col items-center  ">

                    <div className="text-[27px]"><p>About shop</p>
                    </div>
                    <div className="flex gap-4 items-center md:items-start">
                        <img className='w-4 ' src={location} alt="" /> Address
                    </div>
                    <div className="flex gap-4 items-center">
                        <img className='w-3 ml-1' src={telephone} alt="" /> +01 1234567890
                    </div>
                    <div className="flex gap-5 items-center ">
                        <img className='w-5 h-4' src={email} alt="" />  demo@gmail.com
                    </div>

                </div>
                <div className=" w-60 gap-5 flex justify-evenly items-center md:items-start  flex-col ">
                    <div className="text-[27px]"><p>Informations</p></div>
                    <div className="text-center md:text-start">
                        <p>ipsum dolor sit amet,<br /> consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt</p>
                    </div>
                </div>
                <div className=" gap-5   flex justify-evenly flex-col">
                    <div className="text-[27px]">
                        <p>Instagram</p>
                    </div>
                    <div className=" gap-3 grid grid-cols-2">
                        <img className=' bg-white px-5 py-3' src={face} alt="" />
                        <img className=' bg-white px-5 py-3' src={face} alt="" />
                        <img className=' bg-white px-5 py-3' src={face} alt="" />
                        <img className=' bg-white px-5 py-3' src={face} alt="" />
                        <img className=' bg-white px-5 py-3' src={face} alt="" />
                        <img className=' bg-white px-5 py-3' src={face} alt="" />


                    </div>
                </div>
                <div className=" w-64 gap-5 flex justify-evenly flex-col items-center md:items-start ">
                    <div className="text-[27px]">
                        <p>Newsletter</p>
                    </div>
                    <div className="flex gap-3 flex-col items-center md:items-start">
                        <input className='h-9 w-64 pl-2 focus:outline-none text-black ' type="text" placeholder='Enter tour email' />

                        <button className='h-9 w-36 bg-amber-400 hover:bg-transparent hover:text-amber-400 hover:border-2 hover:border-amber-400'>Subscribe</button>
                    </div>
                    <div className="h-11 w-full flex items-center gap-8 ">
                        <img src={fb} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={youtube} alt="" />
                    </div>
                </div>

            </div>
            <div className='mt-12 w-[40rem] bg-white h-[1px] '></div>

            <p className=' text-center md:text-start pt-6'>© 2020 All Rights Reserved By Free Html Templates</p>

        </div>
    )
}

export default Footer
