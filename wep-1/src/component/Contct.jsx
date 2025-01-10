import React from 'react'
import map from '../assets/images/map.jpg'

function Contct() {
    return (

        <div className=" flex items-center flex-col justify-evenly mt-14">
            <div className="text-[35px] text-center  font-bold pb-6">
                <p>REQUEST A CALL BACK</p>
            </div>
            <div className=" flex flex-col gap-7 ">
                <div className="">
                    <input className='h-11 md:w-[750px]   rounded-[20px] pl-4 border-[1px] border-gray-400 focus:outline-none' type="text" placeholder='Full Name' />
                </div>
                <div className="">
                    <input className='h-11 md:w-[750px] rounded-[20px] pl-4 border-[1px] border-gray-400 focus:outline-none' type="text" placeholder='Phone Number' />
                </div>
                <div className="">
                    <input className='h-11 md:w-[750px] rounded-[20px] pl-4 border-[1px] border-gray-400 focus:outline-none' type="text" placeholder='Email Adress' />
                </div>
                <div className="">
                    <input className='h-36 md:w-[750px] rounded-[20px] pl-4 border-[1px] border-gray-400 focus:outline-none' type="text" placeholder='Message' />
                </div>
            </div>
            <div className="py-2 w-36 bg-amber-400 rounded-[20px] flex items-center justify-center md:mt-12 mt-7 ">
                <button>Send</button>
            </div>
            <div className="  flex items-start justify-center">
                <img src={map} alt="" />

            </div>
        </div>

    )
}

export default Contct
