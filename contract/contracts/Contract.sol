import React, { useState, useEffect } from "react";

const Posts = ({ contract, userAddress }) => {
  const [posts, setPosts] = useState([]);

  // Fetch posts when the component mounts or when userAddress changes
  const fetchPosts = async () => {
    try {
      if (!contract || !userAddress) {
        console.error("Contract or userAddress is not available");
        return;
      }

      // Call the getPosts function from the contract
      const fetchedPosts = await contract.getPosts(userAddress);
      console.log(fetchedPosts);  // Debug: Check the fetched posts

      // Set the posts state
      setPosts(fetchedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts(); // Fetch posts when the component is mounted
  }, [contract, userAddress]); // Re-fetch if contract or userAddress changes

  return (
    <div>
      <h2>Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id.toString()}>
              <p><strong>Content:</strong> {post.content}</p>
              <p><strong>Image URL:</strong> {post.imageURL}</p>
              <p><strong>Timestamp:</strong> {new Date(post.timestamp * 1000).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
      <button onClick={fetchPosts}>Refresh Posts</button>
    </div>
  );
};

export default Posts;
