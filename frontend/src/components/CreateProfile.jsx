import React, { useState } from "react";

const CreateProfile = ({ contract }) => {
  const [username, setUsername] = useState("");
  const [status, setStatus] = useState("");

  const handleCreateProfile = async () => {
    try {
      // Check if the contract exists
      if (!contract) {
        console.error("Contract is not available");
        return;
      }

      // Check if the function exists
      if (!contract.createProfile) {
        console.error("createProfile function is not available in the contract");
        return;
      }

      // Call the createProfile function
      const tx = await contract.createProfile(username, status);
      await tx.wait();
      console.log("Profile created successfully!");
    } catch (error) {
      console.error("Error creating profile: ", error);
    }
  };

  return (
    <div>
      <h2>Create Profile</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <button onClick={handleCreateProfile}>Create Profile</button>
    </div>
  );
};

export default CreateProfile;
