import { PDFDownloadLink } from '@react-pdf/renderer'
import React from 'react'
import ResumeContent from '../components/ResumeContent'

function DownloadPdf() {
    return (
        <>
            <PDFDownloadLink document={<ResumeContent />} fileName="somename.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'Download now!'
                }
            </PDFDownloadLink>
        </>
    )
}

export default DownloadPdf