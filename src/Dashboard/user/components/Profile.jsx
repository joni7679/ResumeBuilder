import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import { sendEmailVerification } from 'firebase/auth';
import { ToastContainer } from 'react-toastify';

function Profile() {
    const [isVerifyEmail, setIsVerifyEmail] = useState(false);
    const { user } = useContext(AuthContext);

    const emailVerificationHandler = async (e) => {
        e.preventDefault();
        try {
            await sendEmailVerification(user);
            setIsVerifyEmail(true);
        } catch (error) {
            console.error(error);

        }

    };

    return (
        <>
            <ToastContainer />
            <div className="card  w-96 shadow-sm bg-gray-800 px-5 py-4 text-white">
                <div className="avatar mb-4">
                    <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">

                    </div>
                </div>
                <div className="card-body">
                    <h1><span className='font-semibold'>User Name :</span> {user?.displayName || "N/A"}</h1>
                    <h1><span className='font-semibold'>User Email :</span> {user?.email || "N/A"}</h1>
                    <h1><span className='font-semibold'>User UID :</span> {user?.uid || "N/A"}</h1>
                    <h1><span className='font-semibold'>Email Verified :</span> {user?.emailVerified ? "Yes" : "No"}</h1>
                    {
                        !user?.emailVerified && (
                            <button className="btn btn-primary" onClick={emailVerificationHandler}>
                                Send Verification Email
                            </button>
                        )
                    }
                    {
                        isVerifyEmail && (
                            <p className="text-green-500">Verification email sent successfully!</p>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default Profile;
