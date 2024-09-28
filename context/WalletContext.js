// context/WalletContext.js
"use client";
import React, { createContext, useContext, useState } from 'react';

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [account, setAccount] = useState(null);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]); // Set the first account
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  return (
    <WalletContext.Provider value={{ connectMetaMask, account }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
