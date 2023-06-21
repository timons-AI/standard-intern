import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SubscriptionManagement = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    // Fetch subscriptions from the server
    axios.get('/api/subscriptions')
      .then(response => {
        setSubscriptions(response.data);
      })
      .catch(error => {
        console.error('Error fetching subscriptions:', error);
      });
  }, []);

  return (
    <div>
      <h1>Subscription Management</h1>
      <ul>
        {subscriptions.map(subscription => (
          <li key={subscription.id}>
            <h3>{subscription.companyName}</h3>
            <p>Start Date: {subscription.subscriptionStartDate}</p>
            <p>End Date: {subscription.subscriptionEndDate}</p>
            <p>Payment Status: {subscription.paymentStatus ? 'Paid' : 'Pending'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionManagement;
