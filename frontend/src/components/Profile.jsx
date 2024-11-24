import React, { useState, useEffect } from "react";

// Profile Component
const Profile = ({ contract, userAddress }) => {
  const [username, setUsername] = useState("");
  const [status, setStatus] = useState("");
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [image, setImage] = useState(""); // Optional: Display the image if available

  // Function to fetch profile information
  const fetchProfile = async () => {
    try {
      if (!contract || !userAddress) {
        console.error("Contract or userAddress is not available");
        return;
      }

      // Fetch the username, status, followers, and following
      const _status = await contract.getStatus(userAddress);
      const _followers = await contract.getFollowers(userAddress);
      const _following = await contract.getFollowing(userAddress);
      // Assuming image is stored in profile (optional)
      const _image = ""; // You can modify this part if you have a profile image URL in the contract

      // Set the state with the fetched data
      setStatus(_status);
      setFollowers(_followers);
      setFollowing(_following);
      setImage(_image);

    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  // Fetch profile data when component mounts or userAddress changes
  useEffect(() => {
    fetchProfile();
  }, [contract, userAddress]); // Re-fetch profile if contract or userAddress changes

  return (
    <div>
      <h2>Profile</h2>
      {image && <img src={image} alt="Profile" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />}
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Status:</strong> {status}</p>
      
      <h3>Followers</h3>
      <ul>
        {followers.length === 0 ? (
          <li>No followers yet</li>
        ) : (
          followers.map((follower, index) => <li key={index}>{follower}</li>)
        )}
      </ul>

      <h3>Following</h3>
      <ul>
        {following.length === 0 ? (
          <li>Not following anyone yet</li>
        ) : (
          following.map((followee, index) => <li key={index}>{followee}</li>)
        )}
      </ul>
    </div>
  );
};

export default Profile;
