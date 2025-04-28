'use client'
import { useState } from 'react'
import React from 'react';

const Home: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('File uploaded successfully!');
      } else {
        alert('Failed to upload file.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('An error occurred while uploading the file.');
    }
  };

  return (
    <div style={{ padding: '20px' }} className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 style={{ fontSize: '24px', marginBottom: '20px' , color: 'GrayText' }} className="" >Upload PDF Document</h1>
      <input
        type="file"        
        accept="application/pdf"
        onChange={handleFileChange}
        style={{ marginBottom: '20px' }}
        className="border border-gray-300 rounded p-2 w-full max-w-xs"
        placeholder="Debe escoger un Proyecto normativo"
        required
        aria-label="Debe escoger un Proyecto normativo"
        aria-required="true"
        aria-invalid={selectedFile ? 'false' : 'true'}
        aria-describedby="file-upload-help"
        id="file-upload"
        name="file-upload"
        aria-labelledby="file-upload-label"
        title='Debe escoger un Proyecto normativo'        
        aria-controls="file-upload-description"
        aria-activedescendant="file-upload-description"
        aria-autocomplete="list"
        aria-owns="file-upload-description"
        aria-haspopup="true"        
      />

      <button
        onClick={handleUpload}
        style={{
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Upload
      </button>
      

    </div>
      

  );
};

export default Home;
