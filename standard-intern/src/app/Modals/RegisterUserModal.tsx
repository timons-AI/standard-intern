import React from 'react';

type RegisterUserModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const RegisterUserModal: React.FC<RegisterUserModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null; // Render nothing if the modal is not open
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="modal-overlay absolute inset-0 bg-gray-900 opacity-75"></div>
      <div className="modal-container bg-white w-1/2 mx-auto rounded shadow-lg z-50">
        <div className="modal-content py-4 px-6">
          <span className="close-button text-gray-600 hover:text-gray-800 cursor-pointer" onClick={onClose}>
            &times;
          </span>
          <h2 className="text-2xl font-bold mb-4">Register as an Individual</h2>
          {/* Other registration form fields and components */}
          <button className="bg-gray-800 text-white px-4 py-2 rounded mt-4" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterUserModal;
