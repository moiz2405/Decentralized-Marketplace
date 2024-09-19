// /components/home/HeroSection.js
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion'; // For advanced animations

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] bg-[url('/images/hero-bg.jpg')] bg-cover bg-center flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center p-8">
        <motion.h1 
          className="text-5xl font-bold mb-4" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          Discover Unique Digital Art & Collectibles
        </motion.h1>
        <motion.p 
          className="mb-6 text-lg" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2 }}
        >
          Explore, buy, and sell exclusive NFTs from top creators
        </motion.p>
        <motion.button 
          className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transform transition duration-300 hover:scale-105 shadow-lg"
          whileHover={{ scale: 1.1 }}
          aria-label="Browse Marketplace"
          onClick={() => document.getElementById('explore-section').scrollIntoView({ behavior: 'smooth' })}
        >
          Browse Marketplace
        </motion.button>
      </div>
    </section>
  );
}
