// /components/home/FeaturedCollections.js
"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function FeaturedCollections() {
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const item = document.querySelector('.carousel-item');
      if (item) {
        setItemWidth(item.scrollWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const collections = [
    { name: 'Collection 1', image: '/images/featured1.jpg', description: 'Explore unique digital art.' },
    { name: 'Collection 2', image: '/images/featured2.jpg', description: 'Discover rare music NFTs.' },
    { name: 'Collection 3', image: '/images/featured3.jpg', description: 'Collectible in-game assets.' },
    { name: 'Collection 4', image: '/images/featured4.jpg', description: 'Virtual lands and properties.' },
    { name: 'Collection 5', image: '/images/featured5.jpg', description: 'Rare and collectible cards.' },
    { name: 'Collection 6', image: '/images/featured6.jpg', description: 'Limited edition artworks.' },
  ];

  return (
    <section className="p-8 bg-[url('/images/featured-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Featured Collections</h2>
      <div className="relative overflow-hidden">
        <div className="carousel-wrapper overflow-hidden">
          <motion.div
            className="flex space-x-6"
            initial={{ x: 0 }}
            animate={{ x: [-itemWidth, 0] }}
            transition={{ duration: 15, ease: 'linear', repeat: Infinity }} // Adjust duration here
          >
            {collections.concat(collections).map((collection, index) => (
              <motion.div
                key={index}
                className="carousel-item flex-none w-64 bg-white border border-gray-300 shadow-lg rounded-lg p-4 mb-4 relative"
                initial={{ opacity: 0.8, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Improved shadow effect */}
                <div className="absolute inset-0 rounded-lg border border-transparent shadow-lg" />
                
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-48 object-cover rounded-md mb-4 border border-gray-200"
                />
                <div className="text-center text-gray-800">
                  <h3 className="text-xl font-semibold mb-1">{collection.name}</h3>
                  <p className="text-sm">{collection.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
