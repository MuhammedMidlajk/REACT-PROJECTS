import React from 'react'
import  quote from '../assets/images/quote.jpg'


function Slide(props) {
    return (

        <div className="h-96 w-96 flex justify-around flex-col items-center shadow-lg ">
            <div className="h-16 w-16 rounded-[50%] bg-white">
                <img src={props.image} alt="" />
            </div>
            <div className="">
                <p className='font-bold'>TEMPOR INCIDIDUNT</p>
                <p className='text-center text-amber-400 text-[18px] '>Dipiscing elit</p>
            </div>
            <div className="">
                <img src={quote} alt="" />
            </div>
            <div className="text-center">
                <p className='text-[17px]'>
                    Dipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore <br />magna aliqua. Ut enim ad minim
                </p>
            </div>

        </div>
    )
}

export default Slide
