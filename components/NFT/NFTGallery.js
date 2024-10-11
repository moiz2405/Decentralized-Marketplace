"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function NFTGallery() {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    async function fetchNFTs() {
      const res = await fetch('/api/nfts');
      const data = await res.json();
      setNfts(data);
    }
    fetchNFTs();
  }, []);

  return (
    <div>
      <h1>My NFTs</h1>
      <div className="nft-gallery">
        {nfts.map((nft) => (
          <div key={nft.tokenId} className="nft-item">
            <p>Token ID: {nft.tokenId}</p>
            <p>Owner: {nft.owner}</p>
            {/* Use the next/image component */}
            <Image 
              src={nft.tokenURI} 
              alt={`NFT ${nft.tokenId}`} 
              width={500} 
              height={500} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
