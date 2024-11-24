import React, { useState } from "react";

const SendMessage = ({ contract }) => {
  const [messageTo, setMessageTo] = useState("");
  const [messageContent, setMessageContent] = useState("");

  const sendMessage = async () => {
    if (!contract) return alert("Connect wallet first!");
    const tx = await contract.sendMessage(messageTo, messageContent);
    await tx.wait();
    console.log("Message sent:", tx);
  };

  return (
    <div>
      <h2>Send Message</h2>
      <input
        type="text"
        value={messageTo}
        onChange={(e) => setMessageTo(e.target.value)}
        placeholder="Recipient address"
      />
      <textarea
        value={messageContent}
        onChange={(e) => setMessageContent(e.target.value)}
        placeholder="Enter message"
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default SendMessage;
