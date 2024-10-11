// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;
    mapping(uint256 => uint256) public tokenPrices;

    constructor() ERC721("MyNFT", "MNFT") {
        tokenCounter = 0;
    }

    function createNFT(address recipient, string memory tokenURI, uint256 price) public onlyOwner returns (uint256) {
        uint256 newItemId = tokenCounter;
        _safeMint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
        tokenPrices[newItemId] = price; // Set price for NFT
        tokenCounter++;
        return newItemId;
    }

    function purchaseNFT(uint256 tokenId) public payable {
        require(msg.value >= tokenPrices[tokenId], "Insufficient Ether sent");
        address owner = ownerOf(tokenId);
        _transfer(owner, msg.sender, tokenId); // Transfer NFT to buyer
        payable(owner).transfer(msg.value); // Send Ether to the seller
    }
}
