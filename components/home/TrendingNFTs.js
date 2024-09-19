// /components/home/TrendingNFTs.js
"use client";

import { motion } from 'framer-motion';

export default function TrendingNFTs() {
  const nfts = [
    { id: 1, name: 'CryptoArt #1', price: '2 ETH', img: '/images/nft1.jpg' },
    { id: 2, name: 'Digital Collectible #2', price: '1.5 ETH', img: '/images/nft2.jpg' },
    // Add more NFTs or fetch dynamically
  ];

  return (
    <section className="p-8 bg-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center">Trending NFTs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {nfts.map((nft) => (
          <motion.div 
            key={nft.id} 
            className="nft-card p-4 bg-white border rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <img src={nft.img} alt={nft.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{nft.name}</h3>
            <p className="text-gray-600">{nft.price}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
