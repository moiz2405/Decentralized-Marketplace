import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js

const NFTCard = ({ nft }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-gray-900">
      <Image
        src={nft.image} // Ensure nft.image points to a valid image URL or path
        alt={nft.name}
        width={500} // Set an appropriate width
        height={300} // Set an appropriate height
        className="w-full h-64 object-cover rounded-t-lg" // Optional: You can add more classes for styling
      />
      <div className="p-4">
        <h3 className="text-white text-xl font-bold">{nft.name}</h3>
        <p className="text-gray-400">{nft.description}</p>
      </div>
    </div>
  );
};

export default NFTCard;
