import React, { useState } from 'react';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Code to handle file upload
  };

  return (
    <div className="p-4">
      <input type="file" onChange={handleFileChange} className="mb-4" />
      {selectedFile && (
        <div className="mb-4">
          <span className="font-bold">Selected File:</span> {selectedFile.name}
        </div>
      )}
      <button
        onClick={handleUpload}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
