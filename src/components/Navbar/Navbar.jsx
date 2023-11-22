// Navbar.js

import React, { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-[#01324E] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <img src="https://edzorblaw.com/wp-content/uploads/2023/05/legal-rumble-2-logo.png" alt="Logo" className="mr-4 w-auto h-12" />

          {/* Headings - hide on small screens */}
          <div className="hidden md:flex">
            <div className='flex flex-row gap-2 items-center justify-center'>
            <img src='https://edzorblaw.com/wp-content/uploads/2023/01/secure-icon-png-30.png' className='h-6 w-6'>
            </img>
            <h1 className="text-white mr-4">Premium+</h1>
          </div>
           
            <h1 className="text-white mr-4">Blogs</h1>
            <div className='flex flex-row gap-2 items-center justify-center'>
              <img src='https://edzorblaw.com/wp-content/uploads/2023/08/Asset-144.png' className='h-6 w-6'>
              </img>
              <h1 className="text-white mr-4">Podcast</h1>
            </div>
          </div>
        </div>

        {/* Hamburger menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {showMenu ? '✕' : '☰'}
          </button>
        </div>

        {/* Login/Sign Up button - adjust styling as needed */}
        <div className="hidden md:flex items-center font-mono">
          <button className="bg-[#EDA41D] px-4 py-2 rounded-md">
            Login
          </button>
          <button className="ml-2 bg-white rounded-md px-4 py-2">Sign Up</button>
        </div>
      </div>

      {/* Responsive menu */}
      {showMenu && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-gray-800 text-white p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Mobile Menu</h1>
            <button onClick={toggleMenu} className="text-white">
              ✕
            </button>
          </div>
          <h1 className="text-white mb-2">Heading 1</h1>
          <h1 className="text-white mb-2">Heading 2</h1>
          <h1 className="text-white">Heading 3</h1>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
