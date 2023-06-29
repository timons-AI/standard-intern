import React from 'react';

type RegisterUserModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const RegisterUserModal: React.FC<RegisterUserModalProps> = ({ isOpen, onClose }) => {
  // Modal content and functionality here
  if (!isOpen) {
    return null; // Render nothing if the modal is not open
  }

  return (
    // Modal JSX code
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Register as an Individual</h2>
        {/* Other registration form fields and components */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default RegisterUserModal;
