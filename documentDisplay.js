// src/components/ResumeDisplay.js
import React, { useState } from 'react';
import Mammoth from 'mammoth';
import FileReader from 'react-file-reader';

const ResumeDisplay = () => {
  const [resumeContent, setResumeContent] = useState('');

  const handleFiles = async (files) => {
    const file = files[0];
    const arrayBuffer = await file.arrayBuffer();

    // Convert DOCX to HTML
    Mammoth.convertToHtml({ arrayBuffer })
      .then((result) => setResumeContent(result.value))
      .catch((error) => console.error('Error converting document:', error));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Upload and Display Resume</h2>
      <FileReader handleFiles={handleFiles} fileTypes={['.docx']}>
        <button style={{ padding: '10px', marginBottom: '20px' }}>Upload Resume (.docx)</button>
      </FileReader>
      <div
        dangerouslySetInnerHTML={{ __html: resumeContent }}
        style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '5px', backgroundColor: '#f9f9f9' }}
      />
    </div>
  );
};

export default ResumeDisplay;
