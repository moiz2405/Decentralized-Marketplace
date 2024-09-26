// /components/product/HeroSection.js
import Image from 'next/image'; // Import Next.js Image component

const HeroSection = () => (
  <div className="bg-black h-96 flex items-center justify-center text-center p-8 relative overflow-hidden">
    <Image
      src="/images/p3.jpg" // Ensure the image path is correct
      alt="Background Image" // Consider more descriptive alt text
      layout="fill" // Use fill layout for background images
      objectFit="cover" // Cover the entire section
      className="absolute inset-0 opacity-30" // Adjust the opacity as needed
      priority // Optional: Load this image first for better performance
    />
    <div className="relative z-10"> {/* This ensures the text is on top of the background image */}
      <h1 className="text-5xl font-bold text-white drop-shadow-lg">
        Explore Our Unique Products
      </h1>
      <p className="mt-4 text-lg text-gray-300 drop-shadow-lg">
        Discover the best products for your needs!
      </p>
      <button className="mt-6 bg-teal-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-teal-600 transition duration-300">
        Shop Now
      </button>
    </div>
  </div>
);

export default HeroSection;
