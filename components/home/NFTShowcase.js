import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Importing the Image component from Next.js
import nftData from "../common/nftData"; // Adjust the import path as necessary

const NFTShowcase = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const background = document.querySelector(".background");
            // Adjust the background position based on scroll
            background.style.transform = `translateY(${scrollTop * 0.5}px)`;
        };

        window.addEventListener("scroll", handleScroll);
        
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="parallax-container">
            {/* Background Section */}
            <div className="background" />
            
            {/* NFT Cards Section */}
            <div className="nft-showcase-container">
                <h2 className="text-center">NFT Marketplace</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {nftData.map((nft, index) => (
                        <motion.div
                            key={nft.id}
                            className="nft-card"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <Image
                                src={nft.src} // Ensure this path is correct
                                alt={nft.alt}
                                width={300} // Set an appropriate width
                                height={300} // Set an appropriate height
                                className="nft-image" // Optionally keep your styling
                            />
                            <h3 className="nft-title">{nft.title}</h3>
                            <p className="nft-description">{nft.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NFTShowcase;
