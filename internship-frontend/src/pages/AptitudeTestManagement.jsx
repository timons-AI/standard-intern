import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AptitudeTestManagement = () => {
  const [tests, setTests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await axios.get('/api/tests');
        setTests(response.data.tests);
        setIsLoading(false);
        setErrorMessage('');
      } catch (error) {
        setErrorMessage('Failed to fetch tests. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchTests();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Aptitude Test Management</h1>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : errorMessage ? (
        <div className="error">{errorMessage}</div>
      ) : (
        <ul className="test-list">
          {tests.map((test) => (
            <li key={test.id} className="test-item">
              <h2>{test.name}</h2>
              <p>{test.description}</p>
              <button className="start-button">Start Test</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AptitudeTestManagement;
