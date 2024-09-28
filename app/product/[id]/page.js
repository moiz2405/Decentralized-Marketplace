"use client";
import React, { useState, useEffect } from 'react';
import { Skeleton, Spinner, Alert, AlertIcon, Button, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Attributes from '../../../components/product/Attributes';
import TransactionHistory from '../../../components/product/TransactionHistory';
import OwnerInfo from '../../../components/product/OwnerInfo';
import { fetchEthNFTs, fetchSolNFTs } from '../../../lib/web3';
import { useWallet } from '../../../context/WalletContext';

const ProductDetail = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { signer, account } = useWallet();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true); // Start loading
      try {
        let nft;
        if (id.startsWith('eth')) {
          const ethNFTs = await fetchEthNFTs(signer);
          nft = ethNFTs.find(n => n.id === id);
        } else if (id.startsWith('sol')) {
          const solNFTs = await fetchSolNFTs(account);
          nft = solNFTs.find(n => n.id === id);
        } else {
          const response = await fetch(`/api/products/${id}`);
          if (!response.ok) throw new Error(`Failed to fetch product: ${response.statusText}`);
          nft = await response.json();
        }
        
        if (!nft) throw new Error('Product not found');
        setProduct(nft);
      } catch (err) {
        setError(err.message || 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, signer, account]);

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <Spinner size="xl" color="teal.500" />
        <Text mt={4} fontSize="lg">Loading product details...</Text>
      </div>
    );
  }

  if (error) {
    return (
      <Alert status="error" className="my-4">
        <AlertIcon />
        Error: {error}
      </Alert>
    );
  }

  if (!product) return <Text>No product found.</Text>;

  return (
    <div className="container mx-auto p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-900 to-black shadow-lg rounded-lg p-6 mb-6"
      >
        <h2 className="text-3xl font-bold text-white mb-4">{product.name || 'NFT Name'}</h2>
        <p className="text-lg mb-4 text-gray-300">
          Price: <span className="font-semibold text-teal-400">{product.price} ETH</span>
        </p>
        <p className="mb-4 text-gray-200">{product.description || 'No description available.'}</p>
        <Button
          colorScheme="teal"
          size="lg"
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
        <Attributes attributes={product.attributes || []} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-800 shadow-md rounded-lg p-4 mb-4"
      >
        <TransactionHistory transactions={product.transactions || []} />
      </motion.div>
    </div>
  );
};

export default ProductDetail;
