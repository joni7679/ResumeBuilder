import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import ResumeContent from './ResumeContent';

function ResumeDocument({ data }) {
  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <ResumeContent data={data} />
    </PDFViewer>
  );
}

export default ResumeDocument;
