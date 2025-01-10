import React from 'react'

function Abut() {
    return (
        <div className="h-[500px]   flex items-center justify-center gap-4  flex-col md:flex-row overflow-hidden">

            <div className=" md:py-60 md:px-48 py-40 px-28 bg-[url('src/assets/images/who-img.jpg')] ml-16">


            </div>
            <div className="h-[77%] md:w-[50%]  ">
                <div className="h-[100%]  md:ml-20 flex justify-evenly flex-col text-center md:text-start ">
                    <div className="  text-[35px] font-bold  ">
                        <p> WHO WE ARE </p>
                    </div>
                    <div className="text-[17px] ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                    </div>
                    <div className="text-[17px] mt-5 md:mt-0">
                        <button className='py-2 px-9 rounded-[26px] bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black'>Read more</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Abut
