// /components/home/CTASection.js
"use client";

import { motion } from 'framer-motion';

export default function CTASection() {
  return (   
    <section className="p-8 bg-blue-600 text-white text-center rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Ready to Dive In?</h2>
      <p className="mb-6">Join our community of NFT enthusiasts and start exploring today.</p>
      <motion.button 
        className="bg-white text-blue-600 py-3 px-6 rounded-lg hover:bg-gray-200 transform transition duration-300 hover:scale-105"
        whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
        aria-label="Get Started"
      >
        Get Started
      </motion.button>
    </section>
  );
}
