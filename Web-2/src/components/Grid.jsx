import React from 'react'
function Grid(props) {
    return (
        <div className=' rounded flex flex-col gap-4 items-center justify-center py-2  '>
            <div className='bg-[#F8FAFC] flex items-center justify-center h-80 w-64 ' >
                <img src={props.img} className='w-32 h-32 ' alt="" /></div>
            <div><h1 className='hover:text-[#EB8317]'>{props.productName}</h1></div>
            <div><p className='text-[#A6AEBF]'>{props.productPrice}</p></div>
        </div>


    )
}

export default Grid
