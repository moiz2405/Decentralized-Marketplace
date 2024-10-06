"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('../../components/product/HeroSection'), {
  loading: () => <p>Loading Hero Section...</p>,
});
const FilterBar = dynamic(() => import('../../components/product/FilterBar'), {
  loading: () => <p>Loading Filter Bar...</p>,
});
const FeaturedProducts = dynamic(() => import('../../components/product/FeaturedProducts'), {
  loading: () => <p>Loading Featured Products...</p>,
});
const ProductList = dynamic(() => import('../../components/product/ProductList'), {
  loading: () => <p>Loading Product List...</p>,
});
const Testimonials = dynamic(() => import('../../components/product/Testimonials'), {
  loading: () => <p>Loading Testimonials...</p>,
});
const ConnectWallet = dynamic(() => import('../../components/common/ConnectWallet'), {
  loading: () => <p>Loading Connect Wallet...</p>,
});
const ConnectPhantom = dynamic(() => import('../../components/common/ConnectPhantom'), {
  loading: () => <p>Loading Connect Phantom...</p>,
});

const ProductPage = () => {
  return (
    <main className="bg-gray-50">
      <HeroSection />
      <div className="wallet-buttons flex justify-center my-4">
        <ConnectWallet />
        <ConnectPhantom />
      </div>
      <FilterBar />
      <FeaturedProducts />
      <ProductList />
      <Testimonials />
    </main>
  );
};

export default ProductPage;
