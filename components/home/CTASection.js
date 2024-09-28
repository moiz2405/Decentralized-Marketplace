// /components/home/CTASection.js
"use client";

import { motion } from 'framer-motion';
import { FaRocket, FaUserFriends } from 'react-icons/fa';

export default function CTASection() {
  const cardStyles = "p-4 bg-gray-800 rounded-lg shadow-md mx-2";
  const cardHover = { scale: 1.05, boxShadow: '0 15px 30px rgba(0,0,0,0.5)' };
  const cardTransition = { duration: 0.3 };

  return (
    <section className="p-8 bg-gray-900 text-white text-center rounded-lg shadow-lg relative overflow-hidden">
      <h2 className="text-4xl font-bold mb-4">Ready to Dive In?</h2>
      <p className="mb-6 text-lg">Join our community of NFT enthusiasts and start exploring today.</p>
      
      <div className="flex justify-center mb-6">
        <motion.div 
          className={cardStyles} 
          whileHover={cardHover}
          transition={cardTransition}
          aria-label="Launch Your Journey"
        >
          <FaRocket size={40} className="text-blue-500" />
          <h4 className="text-xl font-semibold mt-2">Launch Your Journey</h4>
          <p className="text-sm">Explore exciting new projects.</p>
        </motion.div>
        <motion.div 
          className={cardStyles} 
          whileHover={cardHover}
          transition={cardTransition}
          aria-label="Join Our Community"
        >
          <FaUserFriends size={40} className="text-blue-500" />
          <h4 className="text-xl font-semibold mt-2">Join Our Community</h4>
          <p className="text-sm">Connect with fellow enthusiasts.</p>
        </motion.div>
      </div>

      <motion.button 
        className="bg-white text-blue-600 py-3 px-8 rounded-lg hover:bg-gray-200 transform transition duration-300 hover:scale-105"
        whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
        aria-label="Get Started"
      >
        Get Started
      </motion.button>

      {/* Background Animation */}
      <motion.div 
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-50"
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
      />
    </section>
  );
}
