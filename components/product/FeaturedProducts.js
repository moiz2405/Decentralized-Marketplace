"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import Image from 'next/image'; // Import Next.js Image component

const FeaturedProducts = () => {
  const featured = [
    { id: 1, name: "Product 1", price: "1.2 ETH", image: "/images/productpage/product1.jpg" },
    { id: 2, name: "Product 2", price: "0.8 ETH", image: "/images/productpage/product2.jpg" },
    { id: 3, name: "Product 3", price: "3.0 ETH", image: "/images/productpage/product3.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change product every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featured.length);
    }, 6000); // 6 seconds duration

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array to avoid unnecessary updates

  return (
    <div className="bg-black py-8 overflow-hidden relative h-96">
      <h2 className="text-3xl font-bold mb-4 text-center text-white">
        Featured Products
      </h2>

      <div className="relative w-full h-full flex justify-center items-center">
        <AnimatePresence>
          {/* Product container */}
          <motion.div
            key={featured[currentIndex].id}
            className="absolute w-[90%] max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "tween", duration: 1 }}
          >
            {/* Product Image */}
            <Image
              src={featured[currentIndex].image}
              alt={featured[currentIndex].name}
              width={300} // Set desired width
              height={200} // Set desired height
              className="w-full md:w-1/2 h-48 md:h-64 object-cover rounded-lg shadow-lg"
              priority // Optional: load this image first for better performance
            />

            {/* Product Details */}
            <div className="md:w-1/2 text-center md:text-left p-4">
              <h3 className="text-2xl font-semibold text-white">
                {featured[currentIndex].name}
              </h3>
              <p className="text-lg font-medium text-teal-300 mt-2">
                {featured[currentIndex].price}
              </p>

              {/* Button with Hover Animation */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-4 bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition duration-300"
              >
                View Details
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FeaturedProducts;
