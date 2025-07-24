import { PDFViewer } from '@react-pdf/renderer'
import React from 'react'
import ResumeDocument from '../components/ResumeDoucment'

function PdfView() {
    return (
        <>
            <PDFViewer>
                <ResumeDocument />
            </PDFViewer>

        </>
    )
}

export default PdfView