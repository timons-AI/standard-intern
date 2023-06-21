import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommunicationScreen = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/api/messages');
        setMessages(response.data.messages);
        setIsLoading(false);
        setErrorMessage('');
      } catch (error) {
        setErrorMessage('Failed to fetch messages. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Communication Screen</h1>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : errorMessage ? (
        <div className="error">{errorMessage}</div>
      ) : (
        <ul className="message-list">
          {messages.map((message) => (
            <li key={message.id} className="message-item">
              <h2>{message.subject}</h2>
              <p>{message.content}</p>
              <div className="metadata">
                <span className="sender">{message.sender}</span>
                <span className="timestamp">{message.timestamp}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommunicationScreen;
