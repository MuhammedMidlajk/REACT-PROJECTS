import React from 'react'


function Navbar() {
    return (
        <div className='fixed top-0 w-[100%] h-[70px] p-[20px] flex justify-between bg-[#111] '>
            <img className='fixed left-[20px] w-[80px] ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="" />
            <img className='fixed right-[20px] w-[30px]' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt="" />
        </div>
    )
}

export default Navbar
