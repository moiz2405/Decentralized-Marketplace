require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

const INFURA_PROJECT_ID = "YOUR_INFURA_PROJECT_ID";
const PRIVATE_KEY = "YOUR_PRIVATE_KEY"; // Never expose your private key publicly

module.exports = {
    solidity: "0.8.0",
    networks: {
        goerli: {
            url: `https://goerli.infura.io/v3/${INFURA_PROJECT_ID}`,
            accounts: [`0x$c9c53c1372b24ce2b583d2c9168fbdfe`],
        },
    },
};
