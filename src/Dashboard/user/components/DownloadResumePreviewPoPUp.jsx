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
                        <DownloadPdf
                            onClick={downloadResume}
                            disabled={loading}
                            className={`w- cursor-pointer md:w-auto px-6 py-3 flex items-center justify-center gap-2 rounded-xl text-sm font-medium shadow-md transition duration-300 ${loading
                                ? "bg-blue-400 cursor-not-allowed opacity-80"
                                : "bg-blue-600 hover:bg-blue-700 text-white"
                                }`}>
                            {loading ? (
                                <>
                                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                    Downloading...
                                </>
                            ) : (
                                <>
                                    <FaCloudDownloadAlt className="inline-block" />
                                    <span> Download Now</span>
                                </>
                            )}
                        </DownloadPdf>
                    </div>

                  
                </div>
            </div>
        </>
    )
}

export default DownloadResumePreviewPoPUp