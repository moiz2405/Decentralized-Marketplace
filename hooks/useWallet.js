// hooks/useWallet.js
import { useState, useEffect } from 'react';

const useWallet = () => {
    const [walletAddress, setWalletAddress] = useState('');
    const [signer, setSigner] = useState(null);
    const [loading, setLoading] = useState(false);
    
    // Connect to Phantom wallet
    const connectPhantom = async () => {
        if (window.solana && window.solana.isPhantom) {
            try {
                setLoading(true);
                const response = await window.solana.connect();
                setWalletAddress(response.publicKey.toString());
                console.log('Phantom connected:', response.publicKey.toString());
            } catch (error) {
                console.error('User rejected connection to Phantom:', error);
            } finally {
                setLoading(false);
            }
        } else {
            console.log('Phantom wallet is not installed');
        }
    };

    // Connect to Ethereum wallet (for example using MetaMask)
    const connectEthereum = async () => {
        if (window.ethereum) {
            try {
                setLoading(true);
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setWalletAddress(accounts[0]);
                // Assuming you are using ethers.js or a similar library to get the signer
                const { ethers } = require('ethers');
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const userSigner = provider.getSigner();
                setSigner(userSigner);
                console.log('Ethereum connected:', accounts[0]);
            } catch (error) {
                console.error('User rejected connection to Ethereum:', error);
            } finally {
                setLoading(false);
            }
        } else {
            console.log('Ethereum wallet is not installed');
        }
    };

    return { walletAddress, signer, loading, connectPhantom, connectEthereum };
};

export default useWallet;
