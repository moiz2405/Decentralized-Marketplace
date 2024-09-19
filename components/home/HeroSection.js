// /components/home/HeroSection.js
export default function HeroSection() {
  return (
    <section className="relative h-[60vh] bg-[url('/images/hero-bg.jpg')] bg-cover bg-center flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center p-8 animate-opacity">
        <h1 className="text-5xl font-bold mb-4 animate-slide-up">Discover Unique Digital Art & Collectibles</h1>
        <p className="mb-6 text-lg animate-slide-up">Explore, buy, and sell exclusive NFTs from top creators</p>
        <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transform transition duration-300 hover:scale-105 shadow-lg animate-fade-in">Browse Marketplace</button>
      </div>
    </section>
  );
}
