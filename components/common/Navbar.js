'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import TypingEffect from 'react-typing-effect'; // Using react-typing-effect as an alternative

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Close the menu when switching to desktop view
      }
    };

    handleResize(); // Check the initial window width
    window.addEventListener('resize', handleResize); // Add resize listener

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up listener
    };
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.style.maxHeight = isOpen ? `${menuRef.current.scrollHeight}px` : '0px';
    }
  }, [isOpen]);

  return (
    <nav className="navbar bg-gray-800 bg-opacity-60 backdrop-blur-md p-6 shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold cursor-pointer">
          <TypingEffect
            text={['Decentralized Marketplace', 'Welcome to Decentralized Marketplace']}
            speed={100}
            eraseDelay={1000}
            typingDelay={500}
            className="transition-transform duration-500 ease-in-out"
          />
        </Link>
        {/* Main Navbar Links */}
        <div className="hidden md:flex space-x-4">
          <Link href="/">
            <span className="text-white hover:text-gray-400 transition-colors duration-300">Home</span>
          </Link>
          <Link href="/product">
            <span className="text-white hover:text-gray-400 transition-colors duration-300">Products</span>
          </Link>
          <Link href="/user">
            <span className="text-white hover:text-gray-400 transition-colors duration-300">User</span>
          </Link>
          <Link href="/checkout">
            <span className="text-white hover:text-gray-400 transition-colors duration-300">Checkout</span>
          </Link>
          <Link href="/admin">
            <span className="text-white hover:text-gray-400 transition-colors duration-300">Admin</span>
          </Link>
          <Link href="/auth/login">
            <span className="text-white hover:text-gray-400 transition-colors duration-300">Login</span>
          </Link>
          <Link href="/auth/register">
            <span className="text-white hover:text-gray-400 transition-colors duration-300">Register</span>
          </Link>
        </div>
        {/* Hamburger Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Hamburger Menu Dropdown */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <Link href="/" className="block text-white hover:text-gray-400 p-2">
          Home
        </Link>
        <Link href="/product" className="block text-white hover:text-gray-400 p-2">
          Products
        </Link>
        <Link href="/user" className="block text-white hover:text-gray-400 p-2">
          User
        </Link>
        <Link href="/checkout" className="block text-white hover:text-gray-400 p-2">
          Checkout
        </Link>
        <Link href="/admin" className="block text-white hover:text-gray-400 p-2">
          Admin
        </Link>
        <Link href="/auth/login" className="block text-white hover:text-gray-400 p-2">
          Login
        </Link>
        <Link href="/auth/register" className="block text-white hover:text-gray-400 p-2">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
