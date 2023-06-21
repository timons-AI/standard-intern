import React from 'react';

const ErrorNotification = ({ message }) => {
  return (
    <div className="bg-red-500 text-white font-bold py-2 px-4 rounded">
      {message}
    </div>
  );
};

export default ErrorNotification;
