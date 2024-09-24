"use client";
import React from 'react';

const ProductDetails = ({ name, price, convertToFiat }) => (
  <div className="product-details bg-gradient-to-r from-blue-800 to-black shadow-lg rounded-lg p-6 mt-4 transition-transform transform hover:scale-105">
    <h1 className="text-3xl font-bold text-white mb-2">{name}</h1>
    <p className="text-lg font-semibold text-gray-300 mb-4">
      Price: <span className="text-blue-400">{price} ETH</span> / <span className="text-green-400">${convertToFiat(price)}</span>
    </p>
    <button className="bg-blue-600 text-white py-2 px-6 rounded-full shadow hover:bg-blue-700 transition-colors duration-200">
      Buy Now
    </button>
  </div>
);

export default ProductDetails;
