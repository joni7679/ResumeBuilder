
import React, { useState } from 'react'
import { CiUser } from 'react-icons/ci'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { TbPasswordFingerprint } from 'react-icons/tb'
import { toast, ToastContainer } from 'react-toastify'
import { auth } from '../firebase/Firebase'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // handle login logic here...
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      localStorage.setItem(("userData"), JSON.stringify(user));

      // redirect to dashboard
      toast.success("login successfully");
      setTimeout(() => {
        navigate(`/dashboard`)
      }, 1000);

    } catch (error) {
      const errorCode = error.code;

      if (errorCode === 'auth/invalid-email') {
        toast.error("Invalid email address");
      } else if (errorCode === 'auth/user-not-found') {
        toast.error("No user found with this email");
      } else if (errorCode === 'auth/wrong-password') {
        toast.error("Incorrect password");
      } else if (errorCode === 'auth/missing-password') {
        toast.error("Password is required");
      } else {
        toast.error("Login failed. Please try again");
      }
    }



  }
  return (
    <>
      <ToastContainer />
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="flex flex-col items-start justify-center px-8 py-20 bg-gradient-to-br from-blue-50 to-purple-100 w-full lg:w-1/2">
          <div className="max-w-xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Resume Builder for <br /> Modern Professionals
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Create, customize, and export your resume in minutes.
              Use professionally designed templates that help you stand out.
            </p>
            <ul className="mt-6 space-y-3 text-gray-600 font-medium">
              <li> Easy to Use & Beginner Friendly</li>
              <li> Export to PDF Instantly</li>
              <li> 100% Free, Forever</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24 w-full lg:w-1/2">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="font-bold leading-tight text-white sm:text-4xl">
              Welcome to Resume Builder!
            </h2>
            <p className="mt-2 text-base text-gray-300">
              Don't have an account?{" "}
              <Link
                to={`/signup`}
                className="font-medium text-blue-600 hover:text-blue-700 underline"
              >
                Create Now
              </Link>
            </p>
            <form method="POST" className="mt-8" onSubmit={handleLogin}>
              <div class="space-y-5">


                <div>
                  <label for="" class="text-base font-medium text-gray-200"> Email address </label>
                  <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <MdOutlineAlternateEmail />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email to get started"
                      class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label for="" class="text-base font-medium text-gray-200"> Password </label>
                  <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <TbPasswordFingerprint />
                    </div>

                    <input
                      type="password"
                      name="password"
                      id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80 cursor-pointer"
                  >
                    Login Now
                  </button>
                </div>
              </div>
            </form>

            <div class="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <button
                class="relative text-sm font-semibold items-center justify-center w-full px-4 py-4   text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-full hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
              >

                Login up with Google
              </button>

              <button

                class="relative text-sm  items-center justify-center w-full px-4 py-4  font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-full hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
              >

                Login up with Facebook
              </button>

            </div>
          </div>
        </div>

        <ToastContainer />
      </div>

    </>
  )
}

export default Login