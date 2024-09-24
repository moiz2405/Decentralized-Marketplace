// /components/home/HowItWorks.js
"use client";

import { FaUserPlus, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    { step: 'Create an Account', icon: <FaUserPlus size={40} />, color: 'bg-gray-800' },
    { step: 'Explore NFTs', icon: <FaSearch size={40} />, color: 'bg-gray-800' },
    { step: 'Make a Purchase', icon: <FaShoppingCart size={40} />, color: 'bg-gray-800' },
  ];

  return (
    <section className="relative p-8 bg-black">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">How It Works</h2>
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-between">
            <div className="border-l-2 border-blue-500 h-full left-1/2" />
          </div>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                className={`p-6 border rounded-lg shadow-lg text-center transition-transform transform ${item.color} hover:scale-105 hover:shadow-2xl`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: 'easeInOut',
                }}
              >
                <div className="mb-4 text-blue-400">{item.icon}</div>
                <h3 className="text-xl font-semibold text-blue-300">Step {index + 1}</h3>
                <p className="text-gray-300">{item.step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
