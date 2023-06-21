import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay fixed inset-0 bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-white w-96 max-w-full mx-auto rounded shadow-lg z-50">
        <div className="modal-content p-4">{children}</div>
        <div className="modal-footer p-4">
          <button
            onClick={onClose}
            className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
