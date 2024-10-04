'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const [dropdown, setDropdown] = useState(false); // State for user dropdown
  const [isAdoptDropdownOpen, setIsAdoptDropdownOpen] = useState(false); // State for "Adopt" dropdown
  const isLoggedIn = true; // Mocked user authentication (replace with actual auth logic)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleUserDropdown = () => {
    setDropdown((prev) => !prev);
  };

  const toggleAdoptDropdown = () => {
    setIsAdoptDropdownOpen((prev) => !prev);
  };

  const adoptLinks = [
    { href: '/adopt/dogs', label: 'Dogs' },
    { href: '/adopt/cats', label: 'Cats' },
    { href: '/adopt/other', label: 'Other Animals' },
  ];

  return (
    <nav className="bg-gradient-to-r from-pink-600 to-pink-500 h-16 py-4 px-6 shadow-lg transition-all duration-300 animate-gradientShift relative z-30">
      <div className="flex justify-between items-center h-full">
        <div className="font-mono text-3xl text-white hover:text-yellow-300 transition-colors duration-300">
          <Link href="/">Adopt-Me</Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu" className="text-white focus:outline-none hover:text-yellow-400 transition-colors duration-300">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 items-center">
          {/* Adopt Dropdown */}
          <li className="relative">
            <button
              onClick={toggleAdoptDropdown}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-2 px-6 rounded-lg text-black transition-transform duration-300 hover:scale-105"
              aria-expanded={isAdoptDropdownOpen}
            >
              Adopt
            </button>
            {isAdoptDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-20 py-2 space-y-2 animate-fadeInUp">
                {adoptLinks.map((link) => (
                  <li key={link.href} className="hover:bg-yellow-300 px-4 py-2">
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-2 px-6 rounded-lg text-black transition-transform duration-300 hover:bg-yellow-400 hover:scale-105">
            <Link href="/donate">Donate</Link>
          </li>

          {/* User Dropdown */}
          <li className="relative">
            <button
              onClick={toggleUserDropdown}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-2 px-6 rounded-full text-black transition-transform duration-300 hover:scale-105"
              aria-expanded={dropdown}
            >
              <FaUser size={24} className="text-white" />
            </button>
            {dropdown && (
              <ul className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-20 py-2 space-y-2 animate-fadeInUp">
                {isLoggedIn ? (
                  <Link href="/user">
                    <li className="px-4 py-2 hover:bg-yellow-300">Profile</li>
                  </Link>
                ) : (
                  <>
                    <Link href="/login">
                      <li className="px-4 py-2 hover:bg-yellow-300">Login</li>
                    </Link>
                    <Link href="/signup">
                      <li className="px-4 py-2 hover:bg-yellow-300">Sign Up</li>
                    </Link>
                    <Link href="/forgot-password">
                      <li className="px-4 py-2 hover:bg-yellow-300">Forgot Password</li>
                    </Link>
                  </>
                )}
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden flex flex-col items-center mt-4 space-y-2 transition-all duration-500 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`} style={{ zIndex: 40 }}>
        <div className="w-full text-center">
          <Link href="/donate" onClick={() => setIsOpen(false)}>
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-2 px-6 rounded-lg text-black w-full transition-transform duration-300 hover:bg-yellow-400">
              Donate
            </div>
          </Link>
        </div>

        <div className="w-full text-center">
          <button
            onClick={toggleAdoptDropdown}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-2 px-6 rounded-lg text-black w-full transition-transform duration-300 hover:bg-yellow-400 flex justify-center"
            aria-expanded={isAdoptDropdownOpen}
          >
            Adopt
          </button>
          {isAdoptDropdownOpen && (
            <div className="bg-white rounded-lg shadow-lg z-20 w-full mt-2">
              {adoptLinks.map((link) => (
                <div key={link.href} className="hover:bg-yellow-300 py-2 px-4">
                  <Link href={link.href} onClick={() => setIsOpen(false)}>{link.label}</Link>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-full text-center">
          <button
            onClick={toggleUserDropdown}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-2 px-6 rounded-full text-black w-full transition-transform duration-300 hover:bg-yellow-400 flex justify-center"
            aria-expanded={dropdown}
          >
            <FaUser size={24} className="text-white" />
          </button>
          {dropdown && (
            <div className="bg-white rounded-lg shadow-lg z-20 w-full mt-2">
              {isLoggedIn ? (
                <Link href="/user" onClick={() => setIsOpen(false)}>
                  <div className="px-4 py-2 hover:bg-yellow-300">Profile</div>
                </Link>
              ) : (
                <>
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    <div className="px-4 py-2 hover:bg-yellow-300">Login</div>
                  </Link>
                  <Link href="/signup" onClick={() => setIsOpen(false)}>
                    <div className="px-4 py-2 hover:bg-yellow-300">Sign Up</div>
                  </Link>
                  <Link href="/forgot-password" onClick={() => setIsOpen(false)}>
                    <div className="px-4 py-2 hover:bg-yellow-300">Forgot Password</div>
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
