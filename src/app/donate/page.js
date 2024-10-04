import React from 'react';
import Image from 'next/image';

const Donation = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gradient-to-r from-pink-500 to-pink-400 min-h-screen">
      <h1 className="text-5xl font-bold text-white mb-4">Support Us with a Donation</h1>
      <p className="text-lg text-gray-200 max-w-xl text-center mb-6">
        Your contributions help us provide better care for animals in need. Scan the QR code below to make a donation.
      </p>
      
      {/* QR Code Section */}
      <div className="w-64 h-64 relative mb-6">
        <Image
          src="https://via.placeholder.com/300" // Replace with your actual QR code URL
          alt="QR Code for Donations"
          layout="fill"
          objectFit="contain"
          className="rounded-lg shadow-lg"
        />
      </div>
      
      <p className="text-lg text-gray-200 mb-4">Thank you for your support!</p>
    </div>
  );
};

export default Donation;