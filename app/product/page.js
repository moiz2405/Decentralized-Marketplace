// /app/product/page.js

import ProductList from '../../components/product/ProductList';
import HeroSection from '../../components/product/HeroSection';
import FilterBar from '../../components/product/FilterBar';
import FeaturedProducts from '../../components/product/FeaturedProducts';
import Testimonials from '../../components/product/Testimonials';

export default function ProductPage() {
  return (
    <main className="bg-gray-50">
      <HeroSection />
      <FilterBar />
      <FeaturedProducts />
      <ProductList />
      <Testimonials />
    </main>
  );
}
