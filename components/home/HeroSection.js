// /components/home/HeroSection.js
"use client";

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-70"
        >
          <source src="/videos/nft-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content Container */}
      <div className="relative z-10 p-8 text-center max-w-2xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Welcome to Our Decentralized Marketplace
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl mb-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Discover and trade NFTs with ease and security in a vibrant community.
        </motion.p>
        <motion.a
          href="#explore"
          className="inline-block bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-600 transition-all"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Now
        </motion.a>
      </div>
    </section>
  );
}
