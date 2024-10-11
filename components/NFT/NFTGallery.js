"use client";
import { useEffect, useState } from 'react';

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
            <img src={nft.tokenURI} alt={`NFT ${nft.tokenId}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
