import React, { useState } from "react";

const FollowUser = ({ contract }) => {
  const [followAddress, setFollowAddress] = useState("");

  const followUser = async () => {
    if (!contract) return alert("Connect wallet first!");
    const tx = await contract.follow(followAddress);
    await tx.wait();
    console.log("Followed user:", tx);
  };

  return (
    <div>
      <h2>Follow User</h2>
      <input
        type="text"
        value={followAddress}
        onChange={(e) => setFollowAddress(e.target.value)}
        placeholder="Enter address to follow"
      />
      <button onClick={followUser}>Follow</button>
    </div>
  );
};

export default FollowUser;
