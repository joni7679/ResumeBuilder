import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import { sendEmailVerification } from 'firebase/auth';
import { ToastContainer } from 'react-toastify';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Profile() {
    const [isVerifyEmail, setIsVerifyEmail] = useState(false);
    const [isLoading, setisLoading] = useState(false)
    const { user } = useContext(AuthContext);

    const emailVerificationHandler = async (e) => {
        e.preventDefault();
        try {
            setisLoading(true)
            await sendEmailVerification(user);
            setisLoading(false)
            setIsVerifyEmail(true)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="flex justify-center items-center min-h-screen px-4">
                <div className="w-full max-w-sm rounded-xl shadow-lg bg-gray-800 text-white p-6">
                    <div className="flex justify-center mb-5">
                        <div className="w-24 h-24 rounded-full ring-4 ring-blue-500 ring-offset-2 ring-offset-gray-900 bg-gray-700 flex items-center justify-center text-xl overflow-hidden">
                            <img src={user.photoURL} alt="" />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <p>
                            <span className="font-semibold">User Name:</span> {user?.displayName || "N/A"}
                        </p>
                        <p>
                            <span className="font-semibold">User Email:</span> {user?.email || "N/A"}
                        </p>
                        <p>
                            <span className="font-semibold">User UID:</span> {user?.uid || "N/A"}
                        </p>
                        <p>
                            <span className="font-semibold">Email Verified:</span>{" "}
                            <span className={user?.emailVerified ? "text-green-400" : "text-red-400"}>
                                {user?.emailVerified ? "Yes" : "No"}
                            </span>
                        </p>

                        {!user?.emailVerified && (
                            <button
                                disabled={isLoading}
                                onClick={emailVerificationHandler}
                                className={`w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition ${isLoading ? "cursor-not-allowed" : ""}`}
                            >
                                {isLoading ?
                                    <>
                                        <div className='flex items-center gap-5'>
                                            <AiOutlineLoading3Quarters className="animate-spin" />
                                            <p>Send Verification..</p>
                                        </div>
                                    </>
                                    : "Send Verification Email"}
                            </button>
                        )}
                        {isVerifyEmail && (
                            <p className="text-green-500 mt-2 text-sm">Verification email sent successfully!</p>
                        )}
                    </div>
                </div>
            </div >
        </>
    );
}

export default Profile;
