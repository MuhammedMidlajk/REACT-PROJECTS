import React from 'react'
import { Link } from 'react-router-dom'
import search from '../assets/Images/search.jpg'
import settings from '../assets/Images/settings.gif'
import cart from '../assets/Images/cart.jpg'

function Nav() {
  return (
    <div>
      <div className="py-7 flex justify-center">
        <div className="w-[75%]   flex  items-center justify-between  ">
          <div className="">
            <p className='text-[30px]'>Sine<span className='text-[#EB8317]'>Mkt.</span></p>
          </div>
          <div className=" ">
            <ul>
              <li className='flex gap-12' >
                <Link to='/'><span className='text-[#EB8317]'>Home</span></Link>
                <Link to='/NewArrival'><span className='ease-in-out delay-200 hover:text-[#EB8317] '>New Arrival</span></Link>
                <Link to='/features'> <span className='ease-in-out delay-200 hover:text-[#EB8317]'>Features</span></Link>
                <Link to='/blog'> <span className='ease-in-out delay-200 hover:text-[#EB8317]'>Blog</span></Link>
                <Link to='/contact'> <span className='ease-in-out delay-200 hover:text-[#EB8317]'>Contact</span></Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6  ">
            <img className='w-5' src={search} alt="" />
            <img className='w-5' src={settings} alt="" />
            <img className='w-5' src={cart} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
