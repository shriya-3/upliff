import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className='w-screen bg-white text-black px-8 md:px-16 lg:px-24 py-3 fixed top-0 z-50 shadow-md font-lexend'
    >
      <div className='hidden md:flex items-center w-full'>
        {/* Left side */}
        <div className='flex space-x-6 flex-1'>
          <Link to="/resources" className="hover:text-[#244e3c] text-sm">RESOURCES</Link>
          <Link to="/schedule" className="hover:text-[#244e3c] text-sm">SCHEDULE</Link>
        </div>

        {/* Center */}
        <div className='flex justify-center flex-1'>
          <Link to="/home" className='hover:text-[#244e3c] text-lg font-semibold'>UPLIFF</Link>
        </div>

        {/* Right side */}
        <div className='flex space-x-6 justify-end flex-1'>
          <Link to="/support" className="hover:text-[#244e3c] text-sm">SUPPORT</Link>
          <Link to="/blog" className="hover:text-[#244e3c] text-sm">BLOG</Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div className='md:hidden flex justify-between items-center'>
        <div>
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>
        <div className='text-center flex-1'>
          <Link to="/home" className='hover:text-[#244e3c] text-lg font-semibold'>UPLIFF</Link>
        </div>
        <div></div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className='md:hidden flex flex-col items-center space-y-2 mt-2'>
          <Link to="/resources" className="hover:text-[#244e3c] text-sm">RESOURCES</Link>
          <Link to="/schedule" className="hover:text-[#244e3c] text-sm">SCHEDULE</Link>
          <Link to="/support" className="hover:text-[#244e3c] text-sm">SUPPORT</Link>
          <Link to="/blog" className="hover:text-[#244e3c] text-sm">BLOG</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
