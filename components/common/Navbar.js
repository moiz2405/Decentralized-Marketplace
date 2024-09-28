// components/common/Navbar.js
'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import TypingEffect from 'react-typing-effect';
import useWallet from '../../hooks/useWallet'; // Ensure this path is correct

const Navbar = () => {
  const { walletAddress, loading, connectPhantom, connectEthereum } = useWallet(); // Access wallet context
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [activeLink, setActiveLink] = useState('');

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

  // Define nav links with their display names
  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/product', name: 'Products' },
    { path: '/user', name: 'User' },
    { path: '/checkout', name: 'Checkout' },
    { path: '/admin', name: 'Admin' },
    { path: '/auth/login', name: 'Login' },
    { path: '/auth/register', name: 'Register' },
  ];

  return (
    <nav className="navbar bg-gray-800 bg-opacity-60 backdrop-blur-md p-6 shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold cursor-pointer">
          <TypingEffect
            text={['Decentralized Marketplace']}
            speed={100}
            eraseDelay={1000}
            typingDelay={500}
            className="transition-transform duration-500 ease-in-out"
          />
        </Link>
        {/* Main Navbar Links */}
        <div className="hidden md:flex space-x-4">
          {navLinks.map(({ path, name }, index) => (
            <Link 
              key={index} 
              href={path} 
              className={`text-white hover:text-gray-400 transition-colors duration-300 ${activeLink === path ? 'underline' : ''}`} 
              onClick={() => setActiveLink(path)}
            >
              {name}
            </Link>
          ))}
          <div className="flex items-center">
            <span className="text-white">{walletAddress || 'Guest'}</span>
            {/* Buttons for wallet connection */}
            <button 
              onClick={connectEthereum} 
              className="bg-blue-600 text-white ml-2 px-4 py-2 rounded"
              disabled={loading}
            >
              {loading ? 'Connecting...' : 'Connect Ethereum'}
            </button>
            <button 
              onClick={connectPhantom} 
              className="bg-purple-600 text-white ml-2 px-4 py-2 rounded"
              disabled={loading}
            >
              {loading ? 'Connecting...' : 'Connect Phantom'}
            </button>
          </div>
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
        {navLinks.map(({ path, name }, index) => (
          <Link 
            key={index} 
            href={path} 
            className="block text-white hover:text-gray-400 p-2" 
            onClick={() => setActiveLink(path)}
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
