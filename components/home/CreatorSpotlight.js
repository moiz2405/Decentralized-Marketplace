// /components/home/CreatorSpotlight.js
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const creators = [
  {
    name: 'Artist A',
    bio: 'A brief bio about Artist A and their work in the NFT space.',
    image: '/images/creator1.jpg',
    socials: {
      twitter: '#',
      instagram: '#',
      portfolio: '#',
    },
  },
  {
    name: 'Artist B',
    bio: 'A brief bio about Artist B and their innovative styles.',
    image: '/images/creator2.jpg',
    socials: {
      twitter: '#',
      instagram: '#',
      portfolio: '#',
    },
  },
  {
    name: 'Artist C',
    bio: 'A brief bio about Artist C and their contributions to digital art.',
    image: '/images/creator3.jpg',
    socials: {
      twitter: '#',
      instagram: '#',
      portfolio: '#',
    },
  },
];

export default function CreatorSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % creators.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + creators.length) % creators.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % creators.length);
  };

  const currentCreator = creators[currentIndex];

  return (
    <section className="p-8 bg-gradient-to-r from-blue-900 to-purple-800 text-white rounded-lg shadow-xl relative">
      <h2 className="text-4xl font-bold mb-6 text-center">Creator Spotlight</h2>
      <div className="flex justify-between items-center">
        <motion.button
          onClick={handlePrev}
          className="bg-transparent text-white p-2 hover:bg-indigo-600 rounded-full transition duration-300"
        >
          &lt;
        </motion.button>
        <div className="text-center">
          <motion.div 
            key={currentCreator.name}
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }}
          >
            <Image 
              src={currentCreator.image} 
              alt={currentCreator.name} 
              width={200} 
              height={200} 
              className="rounded-full mx-auto mb-4 border-4 border-indigo-400 hover:scale-110 transition-transform duration-300" 
              priority 
            />
            <h3 className="text-3xl font-semibold mb-2">{currentCreator.name}</h3>
            <p className="mb-4">{currentCreator.bio}</p>
          </motion.div>
        </div>
        <motion.button
          onClick={handleNext}
          className="bg-transparent text-white p-2 hover:bg-indigo-600 rounded-full transition duration-300"
        >
          &gt;
        </motion.button>
      </div>
      <div className="mt-8 flex justify-center space-x-4">
        <motion.a
          href={currentCreator.socials.twitter}
          className="text-indigo-300 hover:text-white transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Twitter
        </motion.a>
        <motion.a
          href={currentCreator.socials.instagram}
          className="text-indigo-300 hover:text-white transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Instagram
        </motion.a>
        <motion.a
          href={currentCreator.socials.portfolio}
          className="text-indigo-300 hover:text-white transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Portfolio
        </motion.a>
      </div>
    </section>
  );
}
