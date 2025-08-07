import React, { useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/Firebase';
import { toast, ToastContainer } from 'react-toastify';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Navbar from '../Navbar';

function ForgetPassword() {
    const [email, setEmail] = useState("");
    const [isLoading, setisLoading] = useState(false);
    const navigate = useNavigate();

    const handleResetPassword = async (e) => {
        e.preventDefault();
        const emailRegex = /\S+@\S+\.\S+/;

        if (!email) {
            toast.error("Please enter your email");
            return;
        }

        if (!emailRegex.test(email)) {
            toast.error("Enter a valid email address");
            return;
        }
        setisLoading(true);
        try {
            await sendPasswordResetEmail(auth, email);
            toast.success("Password reset email sent Please Check Your Spam Folder");
            setEmail("");
        } catch (error) {
            toast.error("Error sending reset email");
        } finally {
            setisLoading(false);
        }
    }

    return (
        <>
            <Navbar />
            <ToastContainer />
            <div className="flex justify-center items-center min-h-screen bg-gray-900">
                <div className="w-full max-w-sm">
                    <form onSubmit={handleResetPassword} className="bg-gray-800 p-6 rounded shadow-md">
                        <div className="mb-5">
                            <label htmlFor="email" className="text-sm font-medium text-gray-100">
                                Email address
                            </label>
                            <div className="relative mt-2 text-gray-400">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <MdOutlineAlternateEmail />
                                </div>
                                <input
                                    type="text"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="block w-full py-2 pl-10 pr-4 border rounded-md focus:outline-none focus:border-blue-600"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex justify-center cursor-pointer items-center gap-2 py-2 px-4 text-white bg-gradient-to-r from-fuchsia-600 to-blue-600 rounded hover:opacity-80 disabled:opacity-50"
                        >
                            {isLoading ? <AiOutlineLoading3Quarters className="animate-spin" /> : "Send Reset Email"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword;
