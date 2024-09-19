// /components/home/TrendingNFTs.js
export default function TrendingNFTs() {
  const nfts = [
    { id: 1, name: 'CryptoArt #1', price: '2 ETH', img: '/images/nft1.jpg' },
    { id: 2, name: 'Digital Collectible #2', price: '3 ETH', img: '/images/nft2.jpg' },
  ];

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Trending NFTs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {nfts.map((nft) => (
          <div key={nft.id} className="p-4 border rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-2xl">
            <img src={nft.img} alt={nft.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold">{nft.name}</h3>
            <p className="text-green-600 font-bold">{nft.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
