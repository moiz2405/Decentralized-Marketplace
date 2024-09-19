// /components/home/HowItWorks.js
"use client";

import { FaUserPlus, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    { step: 'Create an Account', icon: <FaUserPlus size={40} /> },
    { step: 'Explore NFTs', icon: <FaSearch size={40} /> },
    { step: 'Make a Purchase', icon: <FaShoppingCart size={40} /> },
  ];

  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
      <div className="flex flex-col sm:flex-row gap-8 justify-center">
        {steps.map((item, index) => (
          <motion.div 
            key={index} 
            className="p-6 border rounded-lg shadow-lg bg-white text-center transition-transform transform hover:scale-105 hover:bg-blue-50"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 text-blue-500">{item.icon}</div>
            <h3 className="text-xl font-semibold">Step {index + 1}</h3>
            <p>{item.step}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
