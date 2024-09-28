import { ethers } from 'ethers';
import { Connection, clusterApiUrl } from '@solana/web3.js';

const ethContractAddress = 'YOUR_ETH_CONTRACT_ADDRESS';
const ethABI = [/* Ethereum contract ABI */];

export const mintEthNFT = async (signer) => {
    const contract = new ethers.Contract(ethContractAddress, ethABI, signer);
    const tx = await contract.mint(await signer.getAddress());
    await tx.wait();
    console.log('Ethereum NFT minted');
};

export const fetchEthNFTs = async (signer) => {
    const contract = new ethers.Contract(ethContractAddress, ethABI, signer);
    const tokenCount = await contract.balanceOf(await signer.getAddress());
    
    const tokens = [];
    for (let index = 0; index < tokenCount; index++) {
        const tokenId = await contract.tokenOfOwnerByIndex(await signer.getAddress(), index);
        const tokenURI = await contract.tokenURI(tokenId);
        const metadata = await fetch(tokenURI).then(res => res.json());
        tokens.push(metadata);
    }
    return tokens;
};

export const mintSolNFT = async (walletAddress) => {
    const connection = new Connection(clusterApiUrl('mainnet-beta'));
    const metaplex = new Metaplex(connection);
    
    const nft = await metaplex.nfts().create({
        uri: 'https://arweave.net/YOUR_METADATA',
        name: 'My Solana NFT',
        sellerFeeBasisPoints: 500,
    }).run();

    console.log('Solana NFT minted:', nft);
};

export const fetchSolNFTs = async (walletAddress) => {
    const connection = new Connection(clusterApiUrl('mainnet-beta'));
    const metaplex = new Metaplex(connection);
    const nfts = await metaplex.nfts().findAllByOwner({ owner: walletAddress }).run();
    return nfts;
};
