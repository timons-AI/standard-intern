import React from 'react';

const SubscriptionStatus = ({ status }) => {
  return (
    <div className="subscription-status">
      <p className="status-text">Subscription Status: {status}</p>
    </div>
  );
};

export default SubscriptionStatus;
