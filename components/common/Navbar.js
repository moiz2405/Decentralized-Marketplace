'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSearch, FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image'; // Import the Image component
import useWallet from '../../hooks/useWallet';

const Navbar = () => {
  const { walletAddress, loading, connectEthereum } = useWallet();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLink, setActiveLink] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: '/product', name: 'Products' },
    { path: '/user', name: 'User' },
    { path: '/checkout', name: 'Checkout' },
    { path: '/admin', name: 'Admin' },
    { path: '/auth/login', name: 'Login' },
    { path: '/auth/register', name: 'Register' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search for:', searchQuery);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenuOutsideClick = (e) => {
    if (!e.target.closest('.side-nav') && !e.target.closest('.hamburger')) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      window.addEventListener('click', closeMenuOutsideClick);
    } else {
      window.removeEventListener('click', closeMenuOutsideClick);
    }
    return () => window.removeEventListener('click', closeMenuOutsideClick);
  }, [menuOpen]);

  return (
    <nav 
      className="navbar p-4 fixed w-full top-0 left-0 z-50 flex justify-between items-center rounded-lg backdrop-blur-md"
      style={{ backgroundColor: 'rgba(32, 32, 32, 0.7)' }}
    >
      {/* Logo and Title */}
      <div className="flex items-center space-x-2">
        <Image 
          src="/images/home/icon.png" 
          alt="Site Logo" 
          width={32} // Set the actual width of your logo
          height={32} // Set the actual height of your logo
          className="text-white text-2xl rounded-lg"
        />
        <Link href="/" className="cursor-pointer">
          <span className="text-white text-lg font-bold">MetaMint</span>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex-1 flex justify-center items-center">
        <form 
          onSubmit={handleSearch} 
          className="relative w-full max-w-md flex items-center"
        >
          <label htmlFor="search" className="sr-only">Search</label>
          <input
            id="search"
            type="text"
            className="w-full p-2 rounded-lg bg-[#292929] text-white focus:outline-none"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="absolute right-2 text-gray-400 hover:text-white" aria-label="Search">
            <FaSearch />
          </button>
        </form>
      </div>

      {/* Wallet and Cart */}
      <div className="flex items-center space-x-4">
        <button 
          onClick={connectEthereum} 
          className="bg-blue-600 text-white px-4 py-2 rounded-full"
          disabled={loading}
          aria-label="Connect Wallet"
        >
          {loading ? 'Connecting...' : walletAddress ? 'Connected' : 'Connect Wallet'}
        </button>

        <Link href="/checkout">
          <FaShoppingCart className="text-white text-2xl cursor-pointer" aria-label="Cart" />
        </Link>

        <button 
          onClick={toggleMenu} 
          className="text-white text-2xl ml-4 focus:outline-none hamburger p-2 bg-gray-500 rounded-lg hover:bg-gray-400 transition-all duration-300 ease-in-out"
          aria-label="Toggle Menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Side Menu */}
      <div
        className={`side-nav flex flex-col bg-gray-900 h-screen p-6 space-y-6 fixed right-0 top-0 transform transition-transform duration-500 ease-in-out rounded-lg ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ width: '220px' }}
      >
        <button 
          onClick={toggleMenu} 
          className="self-end text-white text-2xl focus:outline-none hover:text-red-400 transition-all duration-300 ease-in-out"
          aria-label="Close Menu"
        >
          <FaTimes />
        </button>

        {navLinks.map(({ path, name }, index) => (
          <Link 
            key={index} 
            href={path} 
            className={`text-white hover:bg-gray-700 p-2 rounded-lg hover:text-gray-300 transition-colors duration-300 ${activeLink === path ? 'underline' : ''}`}
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
