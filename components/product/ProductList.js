"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Spinner, Alert, AlertIcon } from '@chakra-ui/react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.statusText}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (id) => {
    router.push(`/product/${id}`);
  };

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <Spinner size="xl" color="teal.500" />
    </div>
  );

  if (error) return (
    <div className="p-4">
      <Alert status="error">
        <AlertIcon />
        {error}
      </Alert>
    </div>
  );

  return (
    <div className="bg-black min-h-screen relative">
      <img 
        src="/images/placeholder-5.jpg" // Path to your background image
        alt="Background Image" 
        className="absolute inset-0 w-full h-full object-cover opacity-30" // Adjust opacity if needed
      />
      <div className="relative z-10 container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Product List</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <li
              key={product.id}
              className="bg-gray-800 rounded-lg shadow-2xl transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer overflow-hidden border border-gray-700"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image || `/images/placeholder-${index + 1}.jpg`} // Fallback to placeholder
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                <p className="text-gray-300">{product.description}</p>
                <p className="text-green-400 font-bold mt-2">Price: ${product.price}</p>
                <p className="text-gray-500">Category: {product.category}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
