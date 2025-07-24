import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import ResumeContent from './ResumeContent';

function ResumeDocument() {
  return (
    <div className="text-center my-10 space-y-4">
      <h1 className="text-2xl font-bold text-gray-700">Resume Preview</h1>
      <PDFViewer style={{ width: '100%', height: '600px' }}>
        <ResumeContent />
      </PDFViewer>
    </div>
  );
}

export default ResumeDocument;
