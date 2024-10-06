"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const nftData = [
  { id: 1, src: "/images/nft-1.jpg", alt: "Colorful Abstract NFT" },
  { id: 2, src: "/images/nft-2.jpg", alt: "Digital Landscape NFT" },
  { id: 3, src: "/images/nft-3.jpg", alt: "Futuristic City NFT" },
  { id: 4, src: "/images/nft-4.jpg", alt: "Abstract Shapes NFT" },
  { id: 5, src: "/images/nft-5.jpg", alt: "Surreal Art NFT" },
  { id: 6, src: "/images/nft-6.jpg", alt: "Fantasy World NFT" },
  { id: 7, src: "/images/nft-7.jpg", alt: "Animal Portrait NFT" },
  { id: 8, src: "/images/nft-8.jpg", alt: "Space Exploration NFT" },
  { id: 9, src: "/images/nft-9.jpg", alt: "Geometric Patterns NFT" },
  { id: 10, src: "/images/nft-10.jpg", alt: "Vibrant Colors NFT" },
  { id: 11, src: "/images/nft-11.jpg", alt: "Minimalist Design NFT" },
  { id: 12, src: "/images/nft-12.jpg", alt: "Nature Scene NFT" },
];

const ParallaxNFTCarousel = () => {
  const scrollContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollContainerRef });

  // Transform calculations for three columns
  const col1Y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]); // Left column moves down
  const col2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]); // Middle column moves up
  const col3Y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]); // Right column moves down

  return (
    <div className="relative mx-4 sm:mx-8 my-12 rounded-lg shadow-lg h-screen overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="relative w-full h-[90vh] overflow-y-scroll bg-[#202020] flex justify-center items-center py-10 custom-scroll rounded-lg"
      >
        <div className="relative h-[200vh] w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Left Column */}
          <motion.div
            className="space-y-6 flex flex-col items-center h-full"
            style={{ y: col1Y }}
          >
            {nftData.filter((_, i) => i % 3 === 0).map((nft) => (
              <motion.div
                key={nft.id}
                className="w-64 h-96 bg-gray-100 rounded-xl overflow-hidden shadow-lg sm:w-48 sm:h-72"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image src={nft.src} alt={nft.alt} layout="responsive" width={256} height={384} className="object-cover" />
              </motion.div>
            ))}
          </motion.div>

          {/* Middle Column */}
          <motion.div
            className="space-y-6 flex flex-col items-center h-full"
            style={{ y: col2Y }}
          >
            {nftData.filter((_, i) => i % 3 === 1).map((nft) => (
              <motion.div
                key={nft.id}
                className="w-64 h-96 bg-gray-100 rounded-xl overflow-hidden shadow-lg sm:w-48 sm:h-72"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image src={nft.src} alt={nft.alt} layout="responsive" width={256} height={384} className="object-cover" />
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="space-y-6 flex flex-col items-center h-full"
            style={{ y: col3Y }}
          >
            {nftData.filter((_, i) => i % 3 === 2).map((nft) => (
              <motion.div
                key={nft.id}
                className="w-64 h-96 bg-gray-100 rounded-xl overflow-hidden shadow-lg sm:w-48 sm:h-72"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image src={nft.src} alt={nft.alt} layout="responsive" width={256} height={384} className="object-cover" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxNFTCarousel;
