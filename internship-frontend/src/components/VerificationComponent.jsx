import React from 'react';

const VerificationComponent = ({ verified }) => {
  return (
    <div className="verification-component">
      {verified ? (
        <div className="verification-success">
          <i className="fas fa-check-circle"></i>
          <p>Verified</p>
        </div>
      ) : (
        <div className="verification-pending">
          <i className="fas fa-exclamation-circle"></i>
          <p>Pending Verification</p>
        </div>
      )}
    </div>
  );
};

export default VerificationComponent;
