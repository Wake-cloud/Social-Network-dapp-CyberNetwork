import React from "react";

const EventsListener = ({ contract, provider }) => {
  const listenToEvents = () => {
    if (!contract) return alert("Connect wallet first!");

    provider.on(contract.filters.NewPost(), (postId, author, content, imageURL, timestamp) => {
      console.log("New Post Event:", { postId, author, content, imageURL, timestamp });
    });

    provider.on(contract.filters.Follow(), (follower, followee) => {
      console.log("Follow Event:", { follower, followee });
    });
  };

  return <button onClick={listenToEvents}>Start Listening to Events</button>;
};

export default EventsListener;
