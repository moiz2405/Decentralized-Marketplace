"use client";
import { useState } from "react";

export default function CreateNFT() {
  const [nftData, setNftData] = useState({
    name: "",
    description: "",
    image: "",
  });

  const handleInputChange = (e) => {
    setNftData({
      ...nftData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/nft/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        metadata: nftData,
        privateKey: "<Your_Private_Key>", // Use proper key management
      }),
    });
    const data = await response.json();
    if (data.signature) {
      console.log("NFT successfully signed and ready to be minted:", data);
    } else {
      console.error("Error:", data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="NFT Name"
        value={nftData.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="NFT Description"
        value={nftData.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={nftData.image}
        onChange={handleInputChange}
      />
      <button type="submit">Create NFT</button>
    </form>
  );
}
