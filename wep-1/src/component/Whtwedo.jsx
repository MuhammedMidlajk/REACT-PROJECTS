import React from 'react'

import d1 from '../assets/images/d1.jpg'
import d2 from '../assets/images/d2.jpg'
import d3 from '../assets/images/d3.jpg'
import d4 from '../assets/images/d4.jpg'
import d5 from '../assets/images/d5.jpg'

function Whtwedo() {
    return (


        <div className="">
            <div className=" flex items-center flex-col  ">
                <p className='text-[33px] mt-16 font-bold'>WHAT WE DO</p>
                <p className='md:text-[17px] text-xl mt-2 text-center'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>

                <div className=" py-14 w-[65%]  flex  justify-evenly flex-col md:flex-row  ">

                    <div className="flex justify-between flex-col items-center">

                        <div className=" bg-black h-32 w-32 rounded-[50%] flex items-center justify-center flex-col hover:bg-amber-400	">
                            <img src={d1} alt="" />


                        </div>
                        <div className="">
                            <p>Marketing</p>
                        </div>
                    </div>

                    <div className="h-44  flex justify-between flex-col items-center ">

                        <div className=" bg-black h-32 w-32 rounded-[50%] flex items-center justify-center hover:bg-amber-400">
                            <img src={d2} alt="" />


                        </div>
                        <div className="">
                            <p>Development</p>
                        </div>

                    </div>

                    <div className="h-44  flex justify-between flex-col items-center">

                        <div className=" bg-black h-32 w-32 rounded-[50%] flex items-center justify-center hover:bg-amber-400">
                            <img src={d3} alt="" />

                        </div>
                        <div className="">
                            <p>Html5</p>
                        </div>
                    </div>

                    <div className="h-44  flex justify-between flex-col items-center">


                        <div className=" bg-black h-32 w-32 rounded-[50%] flex items-center justify-center hover:bg-amber-400">
                            <img src={d4} alt="" />

                        </div>
                        <div className="">
                            <p>Css</p>
                        </div>
                    </div>
                    <div className="h-44  flex justify-between flex-col items-center">


                        <div className=" bg-black h-32 w-32 rounded-[50%] flex items-center justify-center hover:bg-amber-400">
                            <img src={d5} alt="" />

                        </div>
                        <div className="">
                            <p>Wordpress</p>
                        </div>
                    </div>



                </div>



            </div>

        </div>
    )
}

export default Whtwedo
