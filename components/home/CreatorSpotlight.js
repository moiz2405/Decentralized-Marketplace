// /components/home/CreatorSpotlight.js
import Image from 'next/image';

export default function CreatorSpotlight() {
  return (
    <section className="p-8 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Creator Spotlight</h2>
      <div className="text-center">
        <Image src="/images/creator1.jpg" alt="Artist A" width={200} height={200} className="rounded-full mx-auto mb-4" />
        <h3 className="text-2xl font-semibold">Artist A</h3>
        <p className="mb-4">A brief bio about the artist and their work in the NFT space.</p>
        <button className="bg-white text-purple-600 py-2 px-6 rounded-lg hover:bg-gray-200 transform transition duration-300 hover:scale-105">View Collection</button>
      </div>
    </section>
  );
}
