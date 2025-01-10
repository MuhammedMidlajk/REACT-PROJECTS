// import React from 'react'
// import user from '../assets/images/user.jpg'
// import search from '../assets/images/search.jpg'
// import { Link } from 'react-router-dom'


// function Nav() {
//   return ( 

  
//     <div className="px-9 py-6 bg- flex bg-[url('src/assets/images/background.jpg')] items-center justify-between  ">

//       <div className=" text-white">
//         <p className="text-[25px]">Esigned</p>
//       </div>
//       <div className="l">

//         <li className='hidden text-white font-light md:flex gap-16'>
//           <Link to='/'>Home</Link>
//           <Link to='/about'>About</Link>
//           <Link to='/whatwedo'>What we do</Link>
//           <Link to='/Portfolio'>Portfolio</Link>
//           <Link to='/Contact'>Contact</Link>

//           <img className="mr-[-30px] h-5" src={user} alt="" /> 
//           <img className="h-5 " src={search} alt="" /> 
          
          
//         </li>

//       </div>

//     </div>
//   )
// }

// export default Nav







import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/images/user.jpg';
import search from '../assets/images/search.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="px-6 py-4 bg-[url('src/assets/images/background.jpg')]  items-center flex justify-between">
      {/* Logo */}
      <div className="text-white">
        <p className="text-[25px]">Esigned</p>
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <FontAwesomeIcon icon={faBars} className="w-6 text-white  h-6 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}/>

       
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          menuOpen ? 'block' : 'hidden'
        } absolute md:static top-16 left-0 right-0 bg-black md:bg-transparent md:flex md:items-center md:gap-16 text-white text-center p-4 md:p-0`}
      >
        <li>
          <Link to="/" className="block py-2 md:py-0">Home</Link>
        </li>
        <li>
          <Link to="/about" className="block py-2 md:py-0">About</Link>
        </li>
        <li>
          <Link to="/whatwedo" className="block py-2 md:py-0">What we do</Link>
        </li>
        <li>
          <Link to="/Portfolio" className="block py-2 md:py-0">Portfolio</Link>
        </li>
        <li>
          <Link to="/Contact" className="block py-2 md:py-0">Contact</Link>
        </li>
        <li className="flex gap-4 items-center justify-center  ">
          <img className="h-5" src={user} alt="User Icon" />
          <img className="h-5" src={search} alt="Search Icon" />
        </li>
      </ul>
    </div>
  );
}

export default Nav;
