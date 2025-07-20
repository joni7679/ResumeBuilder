import { sendPasswordResetEmail, TotpSecret } from 'firebase/auth';
import React, { useState } from 'react'
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/Firebase';
import { toast, ToastContainer } from 'react-toastify';

function ForgetPassword() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    // handleRestPassword

    const handleRestPassword = async (e) => {
        e.preventDefault();
        if (!email) {
            toast.error("Please enter your email");
        }

        try {
            await sendPasswordResetEmail(auth, email);
            toast.success("Password reset email sent to your email");
            setEmail("");
            setTimeout(() => {
                navigate(`/login`)
            },1000);

        } catch (error) {
            toast.error("Error sending password reset email");
        }
    }
    return (
        <>
            <ToastContainer />
            <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">

                <form method="POST" className="mt-8" onSubmit={handleRestPassword}>
                    <div className="space-y-5">
                        <div>
                            <label for="" class="text-base font-medium text-gray-100"> Email address </label>
                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <MdOutlineAlternateEmail />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter email to get started"
                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80 cursor-pointer"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ForgetPassword