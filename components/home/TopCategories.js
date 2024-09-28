// /components/home/TopCategories.js
"use client";

import { FaPaintBrush, FaMusic, FaGamepad, FaCrown } from 'react-icons/fa';
import { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';

export default function TopCategories() {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const categories = useMemo(() => [
    { name: 'Art', icon: <FaPaintBrush size={40} aria-label="Art Icon" /> },
    { name: 'Music', icon: <FaMusic size={40} aria-label="Music Icon" /> },
    { name: 'Collectibles', icon: <FaCrown size={40} aria-label="Collectibles Icon" /> },
    { name: 'Gaming', icon: <FaGamepad size={40} aria-label="Gaming Icon" /> },
  ], []);

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    setHoverPosition({
      x: clientX,
      y: clientY,
    });
  }, []);

  return (
    <section className="top-categories p-8 bg-gray-900 rounded-lg">
      <h2 className="text-4xl font-bold mb-6 text-center text-white">Top Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {categories.map((category) => (
          <motion.div 
            key={category.name} 
            className="category-card relative p-6 border rounded-lg bg-gray-800 text-white shadow-lg flex flex-col items-center justify-center transition-transform transform overflow-hidden"
            onMouseMove={handleMouseMove}
            style={{
              height: '250px',
              transform: `perspective(1000px) rotateX(${(hoverPosition.y - window.innerHeight / 2) / 20}deg) rotateY(${(hoverPosition.x - window.innerWidth / 2) / 20}deg)`,
              transition: 'transform 0.2s ease-out',
            }}
            whileHover={{ 
              scale: 1.1,
              rotate: [0, 5, -5, 0],
              boxShadow: '0 15px 25px rgba(0, 0, 0, 0.5)',
              transition: { duration: 0.4, ease: "easeInOut" }
            }}
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 border-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 rounded-lg opacity-60" />
            <div className="mb-4 text-blue-400">{category.icon}</div>
            <h3 className="text-2xl font-semibold">{category.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
