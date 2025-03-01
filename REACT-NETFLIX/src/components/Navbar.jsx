import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import costom from '../assets/images/costom.jpg';
import { HiOutlineMenu, HiX } from 'react-icons/hi'; // Menu & Close Icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  return (
    <nav className="fixed top-0 w-full h-[70px] px-4 md:px-8 flex items-center justify-between bg-[#111] text-white z-50">
      {/* Logo */}
      <Link to="/">
        <img className="w-[120px] md:w-[150px]" src={costom} alt="Logo" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-lg">
        <Link to="/" className="hover:text-red-500">Home</Link>
        <Link to="/movies" className="hover:text-red-500">Movies</Link>
        <Link to="/signup" className="hover:text-red-500">Signup</Link>  
      </div>

      {/* User Icon & Mobile Menu Button */}
      <div className="flex items-center gap-4">
        {/* User Icon */}
        <Link to="/signup">
          <img
            className="w-[30px] cursor-pointer"
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt="User"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(true)}>
          <HiOutlineMenu size={30} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-screen w-[60%] bg-[#111] text-white flex flex-col items-center pt-10 gap-6 transition-all duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-white" onClick={() => setIsOpen(false)}>
          <HiX size={30} />
        </button>

        {/* Menu Links */}
        <Link to="/" className="hover:text-red-500" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/movies" className="hover:text-red-500" onClick={() => setIsOpen(false)}>Movies</Link>
        <Link to="/signup" className="hover:text-red-500" onClick={() => setIsOpen(false)}>Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;
