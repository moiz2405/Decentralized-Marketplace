// /components/product/HeroSection.js
const HeroSection = () => (
    <div className="bg-black h-96 flex items-center justify-center text-center p-8 relative overflow-hidden">
      <img 
        src="images/p3.jpg" // Replace with your actual image path
        alt="Background Image" 
        className="absolute inset-0 w-full h-full object-cover opacity-30" // Adjust the opacity as needed
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
  