'use client';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-lg shadow-lg m-4 transition-all duration-300 hover:shadow-2xl animate-gradientShift bg-[length:200%_200%]">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
            <li className="me-4 md:me-6">
              <Link href="/about" className="hover:underline hover:text-yellow-300 transition-colors duration-300">
                About
              </Link>
            </li>
            <li className="me-4 md:me-6">
              <Link href="/privacy" className="hover:underline hover:text-yellow-300 transition-colors duration-300">
                Privacy Policy
              </Link>
            </li>
            <li className="me-4 md:me-6">
              <Link href="/licensing" className="hover:underline hover:text-yellow-300 transition-colors duration-300">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline hover:text-yellow-300 transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-200 sm:text-center">
          © 2024 Adopt-Me. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;