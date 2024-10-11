const hre = require("hardhat");

async function main() {
    const nftAddress = "YOUR_NFT_CONTRACT_ADDRESS";
    const NFT = await hre.ethers.getContractAt("MyNFT", nftAddress);
    const tokenURI = "https://your-metadata-url.com/metadata.json"; // replace with your own metadata URL

    const tx = await NFT.mintNFT(tokenURI, { value: ethers.utils.parseEther("0.01") });
    await tx.wait();
    console.log("NFT Minted!");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
