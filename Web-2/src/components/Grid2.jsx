import React from 'react'

function Grid2(props) {
    return (
        <div className=' flex flex-col items-center gap-1'>
            
            <div className="h-80 w-64  ml-2"><img src={props.img1} alt="" /></div>
            <div className="flex"><img className='w-20' src={props.img2} alt="" /><span className='text-[#A6AEBF]'>(45 review)</span> </div>
            <div><h1 className=''>{props.itemName}</h1></div>
            <div><p className='text-[#A6AEBF]'>{props.itemPrice}</p></div>

        </div>
    )
}

export default Grid2
