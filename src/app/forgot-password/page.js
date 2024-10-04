'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Handle forgot password logic here, e.g., send a password reset email
    console.log('Password reset request sent for', email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-600 to-pink-500 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-8 animate-fadeInUp">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-pink-600 mb-6">
          Forgot Password
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Enter your email to reset your password.
        </p>

        {/* Forgot Password Form */}
        <form onSubmit={handleForgotPassword} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 transition-all"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-pink-500 transition-all font-semibold text-lg"
          >
            Send Reset Link
          </button>
        </form>

        {/* Footer Links */}
        <p className="text-center text-gray-500 mt-6">
          Remember your password?{' '}
          <Link href="/login" className="text-pink-600 hover:text-pink-500 font-semibold">
            Log in here
          </Link>
        </p>
        <p className="text-center text-gray-500 mt-2">
          Don't have an account?{' '}
          <Link href="/signup" className="text-pink-600 hover:text-pink-500 font-semibold">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
