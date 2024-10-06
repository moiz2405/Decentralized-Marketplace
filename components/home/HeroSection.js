"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="px-2 md:px-4 lg:px-8 rounded-lg overflow-hidden mb-8"> {/* Added mb-8 for bottom margin */}
      <section className="relative flex items-center justify-center h-screen"> {/* No overflow-hidden here */}
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden rounded-lg"> {/* Ensure rounded corners apply to video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-70"
            aria-label="Background video showcasing NFTs"
            title="NFT Background Video" // Added title for accessibility
            loading="lazy"
          >
            <source src="/videos/nft-background.mp44" type="video/mp4" />
            <p>Your browser does not support the video tag. Please consider updating your browser.</p> {/* Fallback content */}
          </video>
        </div>

        {/* Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg" /> {/* Ensure overlay also has rounded corners */}

        {/* Content Container */}
        <div className="relative z-10 p-8 text-center max-w-2xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
          
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg lg:text-xl mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
           
          </motion.p>
          <motion.a
            href="#explore"
            className="inline-block bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-600 transition-all"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Explore the marketplace"
          >
            Explore Now
          </motion.a>
        </div>
      </section>
    </div>
  );
}
