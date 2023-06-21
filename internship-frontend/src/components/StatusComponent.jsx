import React from 'react';

const StatusComponent = ({ status }) => {
  return (
    <div className="status-component">
      <div className={`status-indicator ${status.toLowerCase()}`}></div>
      <p className="status-text">{status}</p>
    </div>
  );
};

export default StatusComponent;
