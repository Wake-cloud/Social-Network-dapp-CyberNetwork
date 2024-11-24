import React, { useState } from 'react';

const Messages = ({ contract, account }) => {
  const [toAddress, setToAddress] = useState('');
  const [message, setMessage] = useState('');
  const [receivedMessages, setReceivedMessages] = useState('');

  const sendMessage = async () => {
    if (toAddress && message) {
      await contract.sendMessage(toAddress, message);
      setMessage('');
    }
  };

  const getMessages = async () => {
    const userMessages = await contract.getMessages();
    setReceivedMessages(userMessages);
  };

  return (
    <div>
      <h3>Messages</h3>
      <div>
        <input
          type="text"
          value={toAddress}
          onChange={(e) => setToAddress(e.target.value)}
          placeholder="Recipient Address"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
        />
        <button onClick={sendMessage}>Send Message</button>
      </div>

      <div>
        <h4>Your Messages</h4>
        <button onClick={getMessages}>Fetch Messages</button>
        {receivedMessages && <p>{receivedMessages}</p>}
      </div>
    </div>
  );
};

export default Messages;
