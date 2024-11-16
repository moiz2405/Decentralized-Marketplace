'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSearch, FaBars, FaTimes, FaShoppingCart, FaUser } from 'react-icons/fa';
import Image from 'next/image';
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLink, setActiveLink] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: '/product', name: 'Products' },
    { path: '/user', name: 'User' },
    { path: '/checkout', name: 'Checkout' },
    { path: '/admin', name: 'Admin' },
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
      className="fixed top-0 left-0 z-50 flex items-center justify-between w-full p-4 rounded-lg navbar backdrop-blur-md"
      style={{ backgroundColor: 'rgba(32, 32, 32, 0.7)' }}
    >
      {/* Logo and Title */}
      <div className="flex items-center space-x-2">
        <Image
          src="/images/home/icon.png"
          alt="Site Logo"
          width={32}
          height={32}
          className="text-2xl text-white rounded-lg"
        />
        <Link href="/" className="cursor-pointer">
          <span className="text-lg font-bold text-white">MetaMint</span>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-center flex-1">
        <form
          onSubmit={handleSearch}
          className="relative flex items-center w-full max-w-md"
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
          <button type="submit" className="absolute text-gray-400 right-2 hover:text-white" aria-label="Search">
            <FaSearch />
          </button>
        </form>
      </div>

      {/* Cart and Hamburger */}
      <div className="flex items-center space-x-4">
        <Link href="/checkout">
          <FaShoppingCart className="text-2xl text-white cursor-pointer" aria-label="Cart" />
        </Link>

        {/* Display Login or Logout button based on authentication */}
        {!isAuthenticated ? (
          <button
            onClick={() => signIn('github')} // Use GitHub login
            className="px-4 py-2 text-white bg-blue-600 rounded-full"
            aria-label="Login"
          >
            Login with GitHub
          </button>
        ) : (
          <>
            <Link href="/user">
              <FaUser className="text-2xl text-white cursor-pointer" aria-label="User Profile" />
            </Link>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 text-white bg-red-600 rounded-full"
              aria-label="Logout"
            >
              Logout
            </button>
          </>
        )}

        <button
          onClick={toggleMenu}
          className="p-2 ml-4 text-2xl text-white transition-all duration-300 ease-in-out bg-gray-500 rounded-lg focus:outline-none hamburger hover:bg-gray-400"
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
          className="self-end text-2xl text-white transition-all duration-300 ease-in-out focus:outline-none hover:text-red-400"
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

        {/* Logout Button in Hamburger Menu */}
        {isAuthenticated && (
          <button
            onClick={() => signOut()}
            className="p-2 text-white transition-colors duration-300 bg-red-600 rounded-lg hover:bg-red-700"
            aria-label="Logout"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
