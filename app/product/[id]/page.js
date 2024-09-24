"use client";
import React, { useState, useEffect } from 'react';
import OwnerInfo from '../../../components/product/OwnerInfo';
import Attributes from '../../../components/product/Attributes';
import TransactionHistory from '../../../components/product/TransactionHistory';
import { Skeleton, Spinner } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Button } from '@chakra-ui/react';

const ProductDetail = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        if (!response.ok) throw new Error(`Failed to fetch product: ${response.statusText}`);
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size="xl" color="teal.500" />
      </div>
    );
  }

  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!product) return <p>No product found.</p>;

  // Check for owner and creator to prevent TypeError
  const ownerAddress = product.owner ? product.owner.address : 'Unknown';
  const ownerProfilePic = product.owner ? product.owner.profilePic : '/default-profile.png'; // Add a default profile picture
  const creatorAddress = product.creator ? product.creator.address : 'Unknown';
  const creatorProfilePic = product.creator ? product.creator.profilePic : '/default-profile.png'; // Add a default profile picture

  return (
    <div className="container mx-auto p-6">
      {/* Fade-in effect for product details */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-900 to-black shadow-lg rounded-lg p-6 mb-6"
      >
        <h2 className="text-3xl font-bold text-white mb-4">{product.name}</h2>
        <p className="text-lg mb-4 text-gray-300">Price: 
          <span className="font-semibold text-teal-400">
            {product.price} ETH / ${convertToFiat(product.price)}
          </span>
        </p>
        <p className="mb-4 text-gray-200">{product.description}</p>
        <Button 
          colorScheme="teal" 
          size="lg" 
          className="hover:bg-teal-600 transition-all transform hover:scale-105"
          onClick={() => alert('Buy Now functionality coming soon!')}
        >
          Buy Now
        </Button>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gray-800 shadow-md rounded-lg p-4 mb-4"
      >
        <Attributes attributes={product.attributes} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-800 shadow-md rounded-lg p-4 mb-4"
      >
        <OwnerInfo 
          ownerAddress={ownerAddress}
          ownerProfilePic={ownerProfilePic}
          creatorAddress={creatorAddress}
          creatorProfilePic={creatorProfilePic}
          creatorVerified={product.creator ? product.creator.verified : false} // Assume creator verified is false if creator is undefined
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-gray-800 shadow-md rounded-lg p-4 mb-4"
      >
        <TransactionHistory transactionHistory={product.transactionHistory} />
      </motion.div>
    </div>
  );
};

// Utility function to convert ETH to Fiat
const convertToFiat = (ethAmount) => {
  const conversionRate = 2000; // Example conversion rate
  return (ethAmount * conversionRate).toFixed(2);
};

export default ProductDetail;
