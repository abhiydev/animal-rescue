'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-pink-600 to-pink-500 py-4 px-6 font-sans shadow-lg transition-all duration-300 animate-gradientShift bg-[length:200%_200%]">
      <div className="flex justify-between lg:mt-0 mt-4 items-center">
        {/* Brand Logo */}
        <div className="font-mono text-3xl drop-shadow-lg text-white hover:text-yellow-300 transition-colors duration-300">
          <Link href="/">Adopt-Me</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu" className="text-white focus:outline-none hover:text-yellow-400 transition-colors duration-300">
            {isOpen ? <FaTimes size={24} className="animate-fadeIn" /> : <FaBars size={24} className="animate-fadeIn" />}
          </button>
        </div>

        {/* Links - Hidden on mobile, shown on larger screens */}
        <ul className="hidden lg:flex space-x-8">
          {/* Adopt Dropdown */}
          <li className="relative group">
            <button 
              onClick={toggleDropdown}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:bg-yellow-400 py-2 px-6 rounded-lg shadow-md text-black transform hover:scale-105 transition-transform duration-300 flex items-center"
            >
              Adopt
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-10 text-black space-y-2 py-2 animate-fadeInUp">
                <li className="hover:bg-yellow-300 py-2 px-4 rounded transition-colors duration-200">
                  <Link href="/adopt/dogs">Dogs</Link>
                </li>
                <li className="hover:bg-yellow-300 py-2 px-4 rounded transition-colors duration-200">
                  <Link href="/adopt/cats">Cats</Link>
                </li>
                <li className="hover:bg-yellow-300 py-2 px-4 rounded transition-colors duration-200">
                  <Link href="/adopt/other">Other Animals</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:bg-yellow-400 py-2 px-6 rounded-lg shadow-md text-black transform hover:scale-105 transition-transform duration-300">
            <Link href="/donate">Donate</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu - Visible on small screens when toggled */}
      <div className={`lg:hidden flex flex-col items-center mt-4 space-y-4 overflow-hidden transform transition-all duration-500 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        {/* Dropdown on Mobile */}
        <li className="relative w-full text-center">
          <button 
            onClick={toggleDropdown}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:bg-yellow-400 py-2 px-6 rounded-lg shadow-md text-black w-full transform hover:scale-105 transition-transform duration-300"
          >
            Adopt
          </button>
          {isDropdownOpen && (
            <ul className="bg-white mt-2 rounded-lg shadow-lg text-black w-full py-2 animate-fadeInUp">
              <li className="hover:bg-yellow-300 py-2 px-4 rounded transition-colors duration-200">
                <Link href="/adopt/dogs" onClick={toggleMenu}>Dogs</Link>
              </li>
              <li className="hover:bg-yellow-300 py-2 px-4 rounded transition-colors duration-200">
                <Link href="/adopt/cats" onClick={toggleMenu}>Cats</Link>
              </li>
              <li className="hover:bg-yellow-300 py-2 px-4 rounded transition-colors duration-200">
                <Link href="/adopt/other" onClick={toggleMenu}>Other Animals</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:bg-yellow-400 py-2 px-6 rounded-lg shadow-md text-black w-full text-center transform hover:scale-105 transition-transform duration-300">
          <Link href="/donate" onClick={toggleMenu}>Donate</Link>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;