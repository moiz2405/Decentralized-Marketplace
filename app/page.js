// /app/page.js
"use client"; // Mark as a Client Component

import { useEffect, useState } from 'react';
import LoadingScreen from '../components/home/LoadingScreen';
import TopCategories from '../components/home/TopCategories';
import FeaturedCollections from '../components/home/FeaturedCollections';
import TrendingNFTs from '../components/home/TrendingNFTs';
import HowItWorks from '../components/home/HowItWorks';
import CreatorSpotlight from '../components/home/CreatorSpotlight';
import CTASection from '../components/home/CTASection';
import ParallaxNFTCarousel from '../components/home/ParallaxNFTCarousel';
import NFTSlider from '../components/home/NFTSlider';
import { metadata } from '../components/home/metadata'; // Import metadata from the separate file
import HeroSection from '../components/home/HeroSection'; // Fixed component name casing
import '../styles/globals.css';
import NFTShowcase from "../components/home/NFTShowcase";
export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simulating loading delay
    }, 2000); // Set your desired loading time here

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <main>
      <NFTSlider />
      {/* <NFTShowcase /> */}
      {/* <ParallaxNFTCarousel /> */}
      <HeroSection /> {/* Fixed component name casing */}
      <TopCategories />
      <FeaturedCollections />
      {/* <TrendingNFTs /> */}
      {/* <HowItWorks /> */}
      {/* <CreatorSpotlight /> */}
      <CTASection />
    </main>
  );
}
