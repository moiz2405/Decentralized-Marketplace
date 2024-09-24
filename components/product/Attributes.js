"use client";
import React from 'react';

const Attributes = ({ attributes }) => (
  <div className="attributes bg-gradient-to-r from-blue-900 to-black shadow-md rounded-lg p-4 mt-4 text-white">
    <h3 className="text-lg font-semibold mb-2">Attributes</h3>
    {attributes && Array.isArray(attributes) ? (
      <div className="grid grid-cols-2 gap-4">
        {attributes.map(attr => (
          <div
            key={attr.trait_type}
            className="border border-blue-500 p-4 rounded transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <strong className="text-blue-300">{attr.trait_type}:</strong> {attr.value}
          </div>
        ))}
      </div>
    ) : (
      <p className="text-gray-400">No attributes available for this product.</p>
    )}
  </div>
);

export default Attributes;
