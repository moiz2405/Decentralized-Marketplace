// /components/home/FeaturedCollections.js
"use client";

import { motion } from 'framer-motion';

export default function FeaturedCollections() {
  return (
    <section className="p-8 bg-[url('/images/featured-bg.jpg')] bg-cover bg-center">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Featured Collections</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Example collection items */}
        <motion.div 
          className="p-4 border rounded-lg bg-white shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <img src="/images/featured1.jpg" alt="Collection 1" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold">Collection 1</h3>
        </motion.div>
      </div>
    </section>
  );
}
