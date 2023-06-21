import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from the server
    axios.get('/api/user')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div>
      <h1>User Dashboard</h1>
      {userData ? (
        <div>
          <h2>Welcome, {userData.username}!</h2>
          <p>Email: {userData.email}</p>
          <p>Verification Status: {userData.verificationStatus ? 'Verified' : 'Not Verified'}</p>
          {/* Additional user dashboard UI and logic */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserDashboard;
