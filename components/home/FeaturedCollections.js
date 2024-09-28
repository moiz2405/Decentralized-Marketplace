"use client";

import { motion } from 'framer-motion';
import { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import Image from 'next/image';

export default function FeaturedCollections() {
  const [itemWidth, setItemWidth] = useState(0);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const carouselItemRef = useRef(null);

  const collections = useMemo(() => [
    { name: 'Collection 1', image: '/images/home/digital-art.jpg', description: 'Explore unique digital art.' },
    { name: 'Collection 2', image: '/images/home/music-category.jpg', description: 'Discover rare music NFTs.' },
    { name: 'Collection 3', image: '/images/home/gaming-category.jpg', description: 'Collectible in-game assets.' },
    { name: 'Collection 4', image: '/images/home/virtual-property.jpg', description: 'Virtual lands and properties.' },
    { name: 'Collection 5', image: '/images/home/collectibles-category.jpg', description: 'Rare and collectible cards.' },
    { name: 'Collection 6', image: '/images/home/limited-edition.jpg', description: 'Limited edition artworks.' },
  ], []);

  useEffect(() => {
    const handleResize = () => {
      if (carouselItemRef.current) {
        setItemWidth(carouselItemRef.current.scrollWidth);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (carouselItemRef.current) {
      resizeObserver.observe(carouselItemRef.current);
    }

    handleResize();

    return () => {
      resizeObserver.disconnect();
    };
  }, [carouselItemRef]);

  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % collections.length;
    setCurrentIndex(nextIndex);
    setSelectedCollection(collections[nextIndex]);
  }, [currentIndex, collections]);

  const handlePrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + collections.length) % collections.length;
    setCurrentIndex(prevIndex);
    setSelectedCollection(collections[prevIndex]);
  }, [currentIndex, collections]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isModalOpen) {
        if (event.key === 'ArrowRight') {
          handleNext();
        } else if (event.key === 'ArrowLeft') {
          handlePrev();
        } else if (event.key === 'Escape') {
          closeModal();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, handleNext, handlePrev]);

  const handleClick = (index) => {
    setSelectedCollection(collections[index]);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCollection(null);
  };

  return (
    <section className="p-8 bg-[url('/images/featured-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Featured Collections</h2>
      <div className="relative overflow-hidden">
        <div className="carousel-wrapper overflow-hidden">
          <motion.div
            className="flex space-x-6"
            initial={{ x: 0 }}
            animate={{ x: [-itemWidth, 0] }}
            transition={{ duration: 15, ease: 'linear', repeat: Infinity }}
          >
            {collections.map((collection, index) => (
              <motion.div
                key={index}
                ref={carouselItemRef}
                className="carousel-item flex-none w-full sm:w-60 md:w-72 lg:w-80 xl:w-96 bg-white border border-gray-300 shadow-lg rounded-lg p-4 mb-4 relative transition-all duration-300 transform hover:scale-105 z-10"
                initial={{ opacity: 0.8, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                onClick={() => handleClick(index)}
                style={{ zIndex: index === currentIndex ? 20 : 10 }}
                role="button"
                aria-label={`View details of ${collection.name}`}
              >
                <div className="absolute inset-0 rounded-lg border border-transparent shadow-lg" />
                <Image
                  src={collection.image}
                  alt={collection.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4 border border-gray-200"
                  onError={(e) => { e.target.src = '/images/placeholder.jpg'; }} // Fallback image
                />
                <div className="text-center text-gray-800">
                  <h3 className="text-xl font-semibold mb-1">{collection.name}</h3>
                  <p className="text-sm">{collection.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg overflow-hidden max-w-lg w-full">
            <button
              className="absolute top-2 right-2 text-white bg-red-500 p-2 rounded-full"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ✕
            </button>
            {selectedCollection && (
              <div className="p-6">
                <Image
                  src={selectedCollection.image}
                  alt={selectedCollection.name}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover rounded-md mb-4"
                  onError={(e) => { e.target.src = '/images/placeholder.jpg'; }} // Fallback image
                />
                <h3 className="text-2xl font-semibold mb-2">{selectedCollection.name}</h3>
                <p className="text-gray-700">{selectedCollection.description}</p>
              </div>
            )}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <button
                className="bg-gray-800 text-white p-2 rounded-full"
                onClick={handlePrev}
                aria-label="Previous collection"
              >
                ←
              </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <button
                className="bg-gray-800 text-white p-2 rounded-full"
                onClick={handleNext}
                aria-label="Next collection"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
