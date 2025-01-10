import React from 'react'
import w1 from '../assets/images/w1.jpg'
import w2 from '../assets/images/w2.jpg'
import w3 from '../assets/images/w3.jpg'
import w4 from '../assets/images/w4.jpg'
function Potfolio() {
    return (
        <div className="md:h-[800px]  flex justify-stretch flex-col items-center mb-12 mt-8 ">
            <div className="text-[35px] font-bold  md:w-[74%] mt-20 md:mt-0">
                <p>CREATIVE WORKS</p>

            </div>
            <div className=" px-4 md:px-[200px]">
                <p className='mb-14 text-[18px]'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            </div>
            <div className="md:h-[76%]  w-[75%]">
                <div className='w-full h-[50%]  flex'>
                    <div className="w-[50%] h-[100%] ">
                        <img className='md:w-[100%] md:h-[100%] h-[13vh]' src={w1} alt="" />
                    </div>
                    <div className="w-[50%] h-[100%] ">
                        <img className='w-[100%] h-[100%]' src={w2} alt="" />
                    </div>
                </div>
                <div className='w-full h-[50%] flex'>
                    <div className="w-[40%] h-[100%] ">
                        <img className='md:w-[100%] md:h-[100%]  h-[12.3vh]' src={w3} alt="" />
                    </div>
                    <div className="w-[70%] h-[100%] ">
                        <img className='w-[100%] h-[100%]' src={w4} alt="" />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Potfolio
