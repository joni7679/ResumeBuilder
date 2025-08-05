import React, { useState } from 'react'
import { FaCloudDownloadAlt } from 'react-icons/fa';
import ResumeContent from './ResumeContent';
import DownloadPdf from '../Pages/DownloadPdf';

function DownloadResumePreviewPoPUp() {
    const [loading, setLoading] = useState(false);
    const downloadResume = () => {
        setLoading(true);
    }

    return (
        <>
            <div className="download-resume-preview-popup">
                <div className="download-resume-preview-popup__header">
                    <h2 className="text-3xl font-bold text-center text-blue-400">Resume Ready!</h2>
                    <p className="text-center text-gray-500 text-lg">
                        Here's your resume, <span className="text-white font-semibold"></span>
                    </p>
                </div>
                <div className="download-resume-preview-popup__body">
                    <div className="download-resume-preview-popup__body__resume">
                        <h1 className='text-green-700 text-center'>Yours Resume SuccessFully Create</h1>
                    </div>
                    <div className='flex items-center justify-center mt-3'>
                        <DownloadPdf>
                        </DownloadPdf>
                    </div>


                </div>
            </div>
        </>
    )
}

export default DownloadResumePreviewPoPUp