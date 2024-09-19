// /components/home/TrendingNFTs.js
"use client";

import { motion } from 'framer-motion';

export default function TrendingNFTs() {
  const nfts = [
    { id: 1, name: 'CryptoArt #1', price: '2 ETH', img: '/images/nft1.jpg' },
    { id: 2, name: 'Digital Collectible #2', price: '1.5 ETH', img: '/images/nft2.jpg' },
    { id: 3, name: 'Virtual Asset #3', price: '3 ETH', img: '/images/nft3.jpg' },
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
              className="nft-card p-4 bg-white border border-gray-300 rounded-lg shadow-lg relative overflow-hidden"
              initial={{ opacity: 0.9, scale: 0.95 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.4)',
                borderColor: '#d1d5db',
                transition: { 
                  duration: 0.2, // Faster transition for instant effect
                  ease: 'easeInOut'
                }
              }}
              style={{ 
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                borderColor: '#e5e7eb',
                transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out' // Smoother transitions
              }}
            >
              <img
                src={nft.img}
                alt={nft.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
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
