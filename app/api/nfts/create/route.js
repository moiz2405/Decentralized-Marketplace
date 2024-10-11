import { ethers } from "ethers";
import pinataSDK from '@pinata/sdk';

const pinata = pinataSDK('yourPinataApiKey', 'yourPinataSecret');

export async function POST(req) {
  const { metadata, privateKey } = await req.json();
  
  try {
    // Upload metadata to IPFS (Pinata)
    const response = await pinata.pinJSONToIPFS(metadata);
    const ipfsUrl = `https://gateway.pinata.cloud/ipfs/${response.IpfsHash}`;
    
    // Sign the IPFS hash
    const wallet = new ethers.Wallet(privateKey);
    const messageHash = ethers.utils.solidityKeccak256(["string"], [ipfsUrl]);
    const signature = await wallet.signMessage(ethers.utils.arrayify(messageHash));

    return new Response(JSON.stringify({ ipfsUrl, signature }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
