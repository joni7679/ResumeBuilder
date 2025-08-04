import React, { useState, useEffect } from 'react';
import {
    FaGithub, FaLinkedin, FaGlobe, FaGoogleDrive, FaEnvelope, FaPhone, FaMapMarkerAlt
} from 'react-icons/fa';

const ProfileHeader = ({ data }) => {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        if (data) {
            setProfileData(data);
        }
    }, [data]);

    if (!profileData || !profileData.personalinfo) {
        return <div className="text-center text-gray-500 p-4"></div>;
    }

    const { personalinfo } = profileData;

    return (
        <div className="flex justify-between items-center p-6 rounded-lg shadow-sm bg-white">
            <div className="flex flex-col md:flex-row md:items-center gap-6 w-full">
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 capitalize mb-1">
                        {personalinfo?.fullName || 'N/A'}
                    </h2>
                    <p className="text-sm text-gray-500 mb-2">{personalinfo?.jobtitle||'N/A'}</p>

                    <div className="flex gap-2 text-sm text-gray-700">
                        <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-gray-500" />
                            <span>{personalinfo?.address || 'N/A'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaPhone className="text-gray-500" />
                            <span>{personalinfo?.phone || 'N/A'}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaEnvelope className="text-gray-500" />
                            <span>{personalinfo?.email || "N/A"}</span>
                        </div>
                        
                    </div>

                    <div className="flex gap-4 mt-4 text-sm text-gray-600">
                        <a href={personalinfo?.github || 'N/A'} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-black">
                            <FaGithub /> GitHub
                        </a>
                        <a href={personalinfo?.linkedin || 'N/A'} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-700">
                            <FaLinkedin /> LinkedIn
                        </a>
                        <a href={personalinfo?.website || 'N/A'} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-green-700">
                            <FaGlobe /> Website
                        </a>
                        <a href={personalinfo?.portfolio || 'N/A'} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-purple-700">
                            <FaGoogleDrive /> Portfolio
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
