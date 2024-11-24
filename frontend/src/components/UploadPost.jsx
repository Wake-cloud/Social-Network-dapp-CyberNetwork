import React, { useState } from "react";

const UploadPost = ({ contract }) => {
  const [postContent, setPostContent] = useState("");
  const [postImageURL, setPostImageURL] = useState("");

  const uploadPost = async () => {
    if (!contract) return alert("Connect wallet first!");
    const tx = await contract.uploadPost(postContent, postImageURL);
    await tx.wait();
    console.log("Post uploaded:", tx);
  };

  return (
    <div>
      <h2>Upload Post</h2>
      <textarea
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        placeholder="Enter post content"
      />
      <input
        type="text"
        value={postImageURL}
        onChange={(e) => setPostImageURL(e.target.value)}
        placeholder="Enter image URL"
      />
      <button onClick={uploadPost}>Upload Post</button>
    </div>
  );
};

export default UploadPost;
