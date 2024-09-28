import React from 'react';

const NFTCard = ({ nft }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-gray-900">
      <img src={nft.image} alt={nft.name} className="w-full h-64 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-white text-xl font-bold">{nft.name}</h3>
        <p className="text-gray-400">{nft.description}</p>
      </div>
    </div>
  );
};

export default NFTCard;
