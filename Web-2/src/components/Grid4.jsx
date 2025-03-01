import React from 'react'

function Grid4(props) {
    return (
        
            <div className="h-80 w-64 flex flex-col justify-start gap-8 items-start ">

                <div className="font-bold text-[#776B5D]">{props.footerName} </div>

                <div className="text-[#A6AEBF] flex flex-col gap-4">
                    <div className="l">{props.one}</div>
                    <div className="l">{props.two}</div>
                    <div className="l">{props.three}</div>
                    <div className="l">{props.four}</div>
                    <div className="l">{props.five}</div>
                    <div className="l">{props.six}</div>
                    <div className="l">{props.seven}</div>
                    <div className="l">{props.eight}</div>
                    {props.showDiv && <div className=''><input className='h-11 w-56 shadow-lg pl-2 bg-[#F8FAFC] focus:outline-none  ' type="text" placeholder='Enter Email Here...' /> </div>}
                </div>
            </div>
        
    )
}

export default Grid4

