'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const [dropdown, setDropdown] = useState({ adopt: false, auth: false }); // State for dropdowns

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (type) => {
    setDropdown((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <nav className="bg-gradient-to-r from-pink-600 to-pink-500 py-4 px-6 shadow-lg transition-all duration-300 animate-gradientShift bg-[length:200%_200%]">
      <div className="flex justify-between items-center">
        {/* Brand Logo */}
        <div className="font-mono text-3xl text-white hover:text-yellow-300 transition-colors duration-300">
          <Link href="/">Adopt-Me</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-white focus:outline-none hover:text-yellow-400 transition-colors duration-300"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-8 items-center">
          <li className="relative">
            <button
              onClick={() => toggleDropdown('adopt')}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-2 px-6 rounded-lg text-black transition-transform duration-300 hover:bg-yellow-400 hover:scale-105"
              aria-expanded={dropdown.adopt}
            >
              Adopt
            </button>
            {dropdown.adopt && (
              <ul
                className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-10 py-2 space-y-2 animate-fadeInUp"
                role="menu"
              >
                <Link href="/adopt/dogs">
                  <li className="px-4 py-2 hover:bg-yellow-300">Dogs</li>
                </Link>
                <Link href="/adopt/cats">
                  <li className="px-4 py-2 hover:bg-yellow-300">Cats</li>
                </Link>
                <Link href="/adopt/other">
                  <li className="px-4 py-2 hover:bg-yellow-300">Other Animals</li>
                </Link>

              </ul>
            )}
          </li>

          <li className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-2 px-6 rounded-lg text-black transition-transform duration-300 hover:bg-yellow-400 hover:scale-105">
            <Link href="/donate">Donate</Link>
          </li>

          <li className="relative">
            <button
              onClick={() => toggleDropdown('auth')}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-2 px-6 rounded-full text-black transition-transform duration-300 hover:scale-105"
              aria-expanded={dropdown.auth}
            >
              <FaUser size={24} className="text-white" />
            </button>
            {dropdown.auth && (
              <ul
                className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-10 py-2 space-y-2 animate-fadeInUp"
                role="menu"
              >
                <Link href="/login">
                  <li className="px-4 py-2 hover:bg-yellow-300">
                    Login
                  </li>
                </Link>
                <Link href="/signup">
                  <li className="px-4 py-2 hover:bg-yellow-300">
                    Sign Up
                  </li>
                </Link>
                <Link href="/forgot-password">
                  <li className="px-4 py-2 hover:bg-yellow-300">
                    Forgot Password
                  </li>
                </Link>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden flex flex-col items-center mt-4 space-y-4 transition-all duration-500 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        {/* Adopt Dropdown */}
        <li className="relative w-full text-center">
          <button
            onClick={() => toggleDropdown('adopt')}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-2 px-6 rounded-lg text-black w-full transition-transform duration-300 hover:bg-yellow-400"
            aria-expanded={dropdown.adopt}
          >
            Adopt
          </button>
          {dropdown.adopt && (
            <ul className="bg-white mt-2 w-full py-2 space-y-2 animate-fadeInUp" role="menu">
              <Link href="/adopt/dogs" onClick={toggleMenu}>
                <li className=" hover:bg-yellow-300 rounded-2xl text-gray-700">
                  Dogs
                </li>
              </Link>

              <Link href="/adopt/cats" onClick={toggleMenu}>
                <li className=" hover:bg-yellow-300 rounded-2xl text-gray-700">
                  Cats
                </li>
              </Link>

              <Link href="/adopt/other" onClick={toggleMenu}>
                <li className=" hover:bg-yellow-300 rounded-2xl text-gray-700">
                  Other Animals
                </li>
              </Link>
            </ul>
          )}
        </li>

        <li className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-2 px-6 rounded-lg text-black w-full text-center transition-transform duration-300 hover:bg-yellow-400">
          <Link href="/donate" onClick={toggleMenu}>
            Donate
          </Link>
        </li>

        {/* Auth Dropdown in Mobile */}
        <li className="w-full text-center">
          <button
            onClick={() => toggleDropdown('auth')}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-2 px-6 rounded-lg text-black w-full transition-transform duration-300 hover:bg-yellow-400 flex justify-center"
            aria-expanded={dropdown.auth}
          >
            <FaUser size={24} className="text-white" />
          </button>
          {dropdown.auth && (
            <ul className="bg-white mt-2 w-full py-2 space-y-2 animate-fadeInUp text-gray-700" role="menu">

              <Link href="/login" onClick={toggleMenu}>
                <li className="rounded-2xl p-2 hover:bg-yellow-300">
                  Login
                </li>
              </Link>

              <Link href="/signup" onClick={toggleMenu}>
                <li className="rounded-2xl p-2 hover:bg-yellow-300">
                  Sign Up
                </li>
              </Link>

              <Link href="/forgot-password" onClick={toggleMenu}>
                <li className="rounded-2xl p-2 hover:bg-yellow-300">
                  Forgot Password
                </li>
              </Link>

            </ul>
          )}
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
