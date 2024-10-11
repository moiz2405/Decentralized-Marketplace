import { ethers } from "ethers";

async function purchaseNFT(signature, ipfsUrl) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const nftContract = new ethers.Contract(
    "<Smart_Contract_Address>",
    "<ABI>",
    signer
  );

  // Call the lazyMint function from your contract
  const tx = await nftContract.lazyMint(
    signer.getAddress(),
    ipfsUrl,
    signature
  );

  await tx.wait();
  console.log("NFT purchased and minted!");
}
