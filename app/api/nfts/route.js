import { ethers } from 'ethers';
import { NextResponse } from 'next/server';
import MyNFT from '../../../contracts/MyNFT.json'; // Assuming ABI is here

export async function GET() {
  try {
    const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_INFURA_URL);
    const contract = new ethers.Contract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS, MyNFT.abi, provider);
    const tokenCounter = await contract.tokenCounter();

    let nftData = [];
    for (let i = 0; i < tokenCounter; i++) {
      const tokenURI = await contract.tokenURI(i);
      const owner = await contract.ownerOf(i);
      nftData.push({ tokenId: i, tokenURI, owner });
    }

    return NextResponse.json(nftData);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch NFTs' });
  }
}
