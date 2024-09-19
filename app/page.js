// /app/page.js
import HeroSection from '../components/home/HeroSection';
import TopCategories from '../components/home/TopCategories';
import FeaturedCollections from '../components/home/FeaturedCollections';
import TrendingNFTs from '../components/home/TrendingNFTs';
import HowItWorks from '../components/home/HowItWorks';
import CreatorSpotlight from '../components/home/CreatorSpotlight';
import CTASection from '../components/home/CTASection';
import '../styles/globals.css';

export const metadata = {
  title: 'NFT Marketplace',
  description: 'Discover and collect unique digital art.',
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TopCategories />
      <FeaturedCollections />
      <TrendingNFTs />
      <HowItWorks />
      <CreatorSpotlight />
      <CTASection />
    </main>
  );
}
