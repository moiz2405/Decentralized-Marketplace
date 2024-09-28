// /components/home/TrendingNFTs.js
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image'; // Import the Image component

export default function TrendingNFTs() {
  const nfts = [
    { id: 1, name: 'CryptoArt #1', price: '2 ETH', img: '/images/home-trendingnfts/1.jpg' },
    { id: 2, name: 'Digital Collectible #2', price: '1.5 ETH', img: '/images/home-trendingnfts/2.jpg' },
    { id: 3, name: 'Virtual Asset #3', price: '3 ETH', img: '/images/home-trendingnfts/3.jpg' },
    // Add more NFTs or fetch dynamically
  ];

  return (
    <section 
      className="relative p-8 bg-cover bg-center bg-no-repeat h-[500px]"
      style={{ backgroundImage: "url('/images/trending-bg.jpeg')" }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-white relative z-10">Trending NFTs</h2>
      <div className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {nfts.map((nft) => (
            <motion.div
              key={nft.id}
              className="nft-card p-4 bg-white border border-gray-300 rounded-lg shadow-lg relative overflow-hidden cursor-pointer"
              initial={{ opacity: 0.9, scale: 0.95 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
                borderColor: '#d1d5db',
                transition: { 
                  duration: 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }}
              style={{ 
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                borderColor: '#e5e7eb',
                transition: 'box-shadow 0.15s ease, transform 0.15s ease'
              }}
              aria-label={`View details of ${nft.name}`}
            >
              {/* Replace img with Image component */}
              <Image
                src={nft.img}
                alt={nft.name}
                width={300} // Set desired width
                height={200} // Set desired height
                className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-150 ease-in-out"
                onError={(e) => { e.target.src = '/images/placeholder.jpg'; }} // Fallback image
              />
              <h3 className="text-xl font-semibold mb-2">{nft.name}</h3>
              <p className="text-gray-600">{nft.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
