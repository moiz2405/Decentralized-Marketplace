"use client";
import React from 'react';
import Image from 'next/image';

const ProductImage = ({ image, alt }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ height: '200px', width: '100%' }}>
      <Image
        src={image}
        alt={alt}
        layout="fill" // Make sure it fills the parent container
        objectFit="cover" // Maintain aspect ratio while covering the area
        className="transition-transform duration-300 ease-in-out"
      />
    </div>
  );
};

export default ProductImage;
