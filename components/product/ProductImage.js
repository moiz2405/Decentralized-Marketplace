"use client";
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const ProductImage = ({ image, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="image-preview relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <img
        src={image}
        alt={alt}
        className="w-full h-auto cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <Lightbox
          mainSrc={image}
          onCloseRequest={() => setIsOpen(false)}
          enableZoom={false}
          imageCaption={alt} // Optional: add a caption to the image
          toolbarButtons={[
            <button className="text-white" onClick={() => setIsOpen(false)}>Close</button>,
          ]}
        />
      )}
    </div>
  );
};

export default ProductImage;
