"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const nftData = [
  { id: 1, src: '/images/home/slider-1.jpg', alt: 'NFT 1', description: 'Description for NFT 1' },
  { id: 2, src: '/images/home/slider-2.jpg', alt: 'NFT 2', description: 'Description for NFT 2' },
  { id: 3, src: '/images/home/slider-3.jpg', alt: 'NFT 3', description: 'Description for NFT 3' },
];

const NFTSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(Array(nftData.length).fill(0));

  const startLoading = (index) => {
    // Reset loading progress for the current NFT
    setLoadingProgress((prev) => prev.map((_, i) => (i === index ? 0 : _)));
    const intervalId = setInterval(() => {
      setLoadingProgress((prev) => {
        const newProgress = [...prev];
        if (newProgress[index] >= 100) {
          clearInterval(intervalId);
          return newProgress;
        }
        newProgress[index] += 10; // Adjust loading speed here
        return newProgress;
      });
    }, 300); // Interval timing

    // Reset the loading bar after it reaches 100%
    setTimeout(() => {
      clearInterval(intervalId);
      setLoadingProgress((prev) =>
        prev.map((_, i) => (i === index ? 0 : _))
      ); // Reset after finishing
    }, 3000); // Time before resetting the loading bar
  };

  const changeSlide = (index) => {
    setCurrentIndex(index);
    startLoading(index);
  };

  useEffect(() => {
    startLoading(currentIndex);
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % nftData.length;
      setCurrentIndex(nextIndex);
      startLoading(nextIndex);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="relative px-4 md:px-8 pb-8">
      <div
        className="relative w-full h-screen bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: "url('/images/home/slider-bg.png')" }}
      >
        <div className="flex items-center justify-between h-full max-w-4xl mx-auto rounded-2xl shadow-lg overflow-hidden">
          <div className="flex-1 flex items-center justify-center p-2">
            <div className="relative w-full h-0" style={{ paddingTop: '100%' }}>
              {nftData.map((nft, index) => (
                <Image
                  key={nft.id}
                  src={nft.src}
                  alt={nft.alt}
                  layout="fill"
                  objectFit="cover"
                  className={`absolute top-0 left-0 rounded-2xl transition-opacity duration-500 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="text-left">
              <h2 className="text-xl font-bold mb-2 text-white">{nftData[currentIndex].alt}</h2>
              <p className="text-white">{nftData[currentIndex].description}</p>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4 z-10">
          <div className="-ml-4">
            <button
              className="bg-black bg-opacity-70 text-white p-3 rounded-full transition-transform duration-300 hover:bg-opacity-90 flex items-center justify-center"
              aria-label="Previous slide"
              style={{ width: '50px', height: '50px' }}
              onClick={() => changeSlide((currentIndex - 1 + nftData.length) % nftData.length)}
            >
              <span className="text-2xl">&#10094;</span>
            </button>
          </div>
          <div className="-mr-4">
            <button
              className="bg-black bg-opacity-70 text-white p-3 rounded-full transition-transform duration-300 hover:bg-opacity-90 flex items-center justify-center"
              aria-label="Next slide"
              style={{ width: '50px', height: '50px' }}
              onClick={() => changeSlide((currentIndex + 1) % nftData.length)}
            >
              <span className="text-2xl">&#10095;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Loading Bars */}
      <div className="flex justify-center space-x-4 mt-4 z-20">
        {nftData.map((_, index) => (
          <div
            key={index}
            className="relative flex-grow cursor-pointer"
            style={{
              maxWidth: '80px',  // Adjusted max width for better visibility
              width: '100%',
            }}
            onClick={() => changeSlide(index)}
          >
            <div className="bg-blue-900 h-1 rounded"> {/* Dark Blue background for loading bar */}
              <div
                className={`bg-cyan-400 h-full rounded transition-all duration-300`}
                style={{
                  width: `${loadingProgress[index]}%`, // Set width dynamically
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTSlider;
