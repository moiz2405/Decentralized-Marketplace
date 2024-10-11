import { ethers } from 'ethers';
import MyNFT from '../../../../contracts/MyNFT.json';

export async function POST(req: Request) {
  try {
    const { tokenId } = await req.json();

    // Connect to Ethereum provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    // Get contract instance
    const contract = new ethers.Contract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS, MyNFT.abi, signer);

    // Get token price
    const tokenPrice = await contract.tokenPrices(tokenId);

    // Purchase NFT
    const tx = await contract.purchaseNFT(tokenId, { value: tokenPrice });
    await tx.wait();

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Purchase failed' });
  }
}
