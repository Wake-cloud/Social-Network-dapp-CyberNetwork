import { ethers } from "ethers"; // Import ethers.js for blockchain interaction

// Function to connect wallet
const connectWallet = async () => {
  // Check if the browser has MetaMask or a Web3 wallet installed
  if (window.ethereum) {
    try {
      // Request account access
      await window.ethereum.request({ method: "eth_requestAccounts" });

      // Create an ethers provider instance using MetaMask
      const provider = new ethers.BrowserProvider(window.ethereum);

      // Get the signer (the current account)
      const signer = await provider.getSigner();

      // Optionally, log the user's wallet address
      const userAddress = await signer.getAddress();
      console.log("Connected to wallet:", userAddress);

      // You can also interact with the smart contract here if needed
      // Example: const contract = new ethers.Contract(contractAddress, contractABI, signer);

      // If needed, save the provider and signer to state or context
      // Example: setProvider(provider); setSigner(signer); setContract(contract);
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  } else {
    alert("Please install MetaMask to connect your wallet.");
  }
};

export default connectWallet;
