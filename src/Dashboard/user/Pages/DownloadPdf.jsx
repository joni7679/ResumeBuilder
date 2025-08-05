import { PDFDownloadLink } from '@react-pdf/renderer';
import React, { useContext } from 'react';
import ResumeContent from '../components/ResumeContent';
import { AuthContext } from '../../../Context/AuthContext';

function DownloadPdf() {
    let savedata = JSON.parse(localStorage.getItem("resumeData"));
    let resumeData = savedata?.personalinfo?.fullName || "resume";
    const formattedName = resumeData.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_]/g, "");

    return (
        <div className="flex items-center justify-center mt-8">
            <PDFDownloadLink
                document={<ResumeContent />}
                fileName={`${formattedName}_Resume.pdf`}
            >
                {({ loading }) => (
                    <button
                        className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                    >
                        {loading ? 'Preparing PDF...' : `Download's Resume`}
                    </button>
                )}
            </PDFDownloadLink>
        </div>
    );
}

export default DownloadPdf;
