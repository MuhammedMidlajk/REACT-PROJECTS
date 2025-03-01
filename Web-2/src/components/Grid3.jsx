
import React from 'react'

function Grid3(props) {
  return (
    <div className='flex flex-col gap-3 '>

      <div className="h-64  "><img src={props.image} alt="" /></div>
      <div><h1 className="hover:text-[#EB8317]">{props.itemName}</h1></div>
      <div className="text-[#A6AEBF]">{props.itemPrice}</div>
      <div className="text-[#A6AEBF] w-96 text-[11px]">{props.itemTag}</div>
      
    </div>
  )
}

export default Grid3
