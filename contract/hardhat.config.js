require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity: "0.8.19", // Specify the Solidity version you are using
  networks: {
    polygonAmoy: {
      url: "https://polygon-amoy.g.alchemy.com/v2/bXVsZXhsIcgy7ceLe92s7v8vZsQG64hB",  // RPC URL for Mumbai Testnet
      accounts: ["a5f1f59de420690d57900787a7bd61645479b3eed7f285384873d2a96da19555"],  // Hardcode your private key here
    },
    polygonMainnet: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/bXVsZXhsIcgy7ceLe92s7v8vZsQG64hB",  // RPC URL for Polygon Mainnet
      accounts: ["a5f1f59de420690d57900787a7bd61645479b3eed7f285384873d2a96da19555"],  // Hardcode your private key here
    },
  },
  etherscan: {
    apiKey: "YOUR_POLYGONSCAN_API_KEY",  // Hardcode your PolygonScan API key
  },
};
