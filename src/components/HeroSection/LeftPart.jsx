import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function LeftPart() {
    const { user, loading, error } = useContext(AuthContext);
    let navigate = useNavigate()
    // checkuserlog in is not logic here
    const checkUserisLoginIsNot = () => {
        if (!user) {
            toast.error("Plz Login First");
            setTimeout(() => {
                navigate(`/login`)
            }, 1000);
        }
        else{
            console.log(user)
            navigate(`dashboard/resume-Marker`)
        }
        
    }

    return (
        <>

            <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Build Your Professional Resume
                </h1>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    Create a standout resume in minutes with our easy-to-use resume builder.
                    <br />
                    Choose from multiple templates and download your resume as a PDF.
                </p>
                <button onClick={checkUserisLoginIsNot} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow cursor-pointer">
                    Build Your Resume Now
                </button>
                <ToastContainer />
            </div>
        </>
    )
}

export default LeftPart