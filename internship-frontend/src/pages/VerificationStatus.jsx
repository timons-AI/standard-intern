import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VerificationStatus = () => {
  const [verificationStatus, setVerificationStatus] = useState('');

  useEffect(() => {
    // Fetch verification status from the server
    axios.get('/api/verification/status')
      .then(response => {
        setVerificationStatus(response.data);
      })
      .catch(error => {
        console.error('Error fetching verification status:', error);
      });
  }, []);

  return (
    <div>
      <h1>Verification Status</h1>
      {verificationStatus ? (
        <p>Your verification status: {verificationStatus}</p>
      ) : (
        <p>Loading verification status...</p>
      )}
    </div>
  );
};

export default VerificationStatus;
