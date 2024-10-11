import { useState } from 'react';
import { ethers } from 'ethers';
import { connectWallet, getNFTContract } from '../../lib/ethers';
import { uploadMetadata } from '../../lib/ipfs';

export default function MintNFT() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const handleImageChange = (e) => setImage(e.target.files[0]);

  const mintNFT = async () => {
    try {
      const { signer } = await connectWallet();
      const contract = await getNFTContract(signer);

      // Upload metadata to IPFS
      const metadata = { name, description };
      const metadataURL = await uploadMetadata(image, metadata);

      // Mint NFT
      const tx = await contract.createNFT(signer.getAddress(), metadataURL);
      await tx.wait();

      setStatus('NFT Minted Successfully!');
    } catch (err) {
      console.error(err);
      setStatus('Error minting NFT');
    }
  };

  return (
    <div>
      <h1>Mint a New NFT</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="NFT Name" />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="NFT Description" />
      <input type="file" onChange={handleImageChange} />
      <button onClick={mintNFT}>Mint NFT</button>
      {status && <p>{status}</p>}
    </div>
  );
}
