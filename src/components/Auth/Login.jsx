import React, { useState } from 'react'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { TbPasswordFingerprint } from 'react-icons/tb'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'
import { toast, ToastContainer } from 'react-toastify'
import { auth } from '../../firebase/Firebase'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../Navbar'

function Login() {
  const [email, setEmail] = useState("")
  const [islogin, setIsLogin] = useState(false)
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      localStorage.setItem("userData", JSON.stringify(user))
      toast.success("Login successful!")
      setIsLogin(true)
      setTimeout(() => {
        navigate('/dashboard')
      }, 1000)
    } catch (error) {
      const errorCode = error.code
      if (errorCode === 'auth/invalid-email') {
        toast.error("Invalid email address")
      } else if (errorCode === 'auth/user-not-found') {
        toast.error("No user found with this email")
      } else if (errorCode === 'auth/wrong-password') {
        toast.error("Incorrect password")
      } else if (errorCode === 'auth/missing-password') {
        toast.error("Password is required")
      } else {
        toast.error("Login failed. Please try again")
      }
    }
  }

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success("User signed in with Google!");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
      <div className="flex flex-col lg:flex-row min-h-screen bg-white">

        <div className="flex flex-col justify-center px-8 py-16 bg-gradient-to-br from-blue-100 to-purple-200 w-full lg:w-1/2">
          <div className="max-w-xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Resume Builder for <br /> Modern Professionals
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Create, customize, and export your resume in minutes using beautiful templates.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700 font-medium list-disc pl-5">
              <li>Easy to Use & Beginner Friendly</li>
              <li>Export to PDF Instantly</li>
              <li>100% Free, Forever</li>
            </ul>
          </div>
        </div>


        <div className="flex items-center justify-center px-6 py-10 w-full lg:w-1/2 bg-gray-900 ">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-gray-100 mb-2">Welcome Back</h2>
            <p className="text-sm text-gray-600 mb-6">
              Don’t have an account?{' '}
              <Link to="/signup" className="text-blue-600 font-medium hover:underline">
                Register now
              </Link>
            </p>
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                  Email address
                </label>
                <div className="relative mt-2">
                  <MdOutlineAlternateEmail className="absolute top-3 left-3 text-gray-200 text-lg" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                  Password
                </label>
                <div className="relative mt-2">
                  <TbPasswordFingerprint className="absolute top-3 left-3 text-gray-200 text-lg" />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-4 py-3 text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

                  />
                </div>
                <div className="text-right mt-2">
                  <Link to="/forgetpassword" className="text-sm text-blue-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={islogin}
                  className={`w-full py-3 text-white font-semibold cursor-pointer rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 transition ${islogin ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                    }`}
                >
                  {islogin ? <span className="animate-spin">Loading...</span> : "Login Now"}
                </button>

              </div>
            </form>


            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="px-3 text-gray-500 text-sm">OR</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <button type='button' onClick={handleGoogleSignIn} className="flex cursor-pointer items-center justify-center gap-2 w-full py-3 border border-gray-300 rounded-full bg-white text-sm font-semibold text-gray-700 hover:bg-gray-100">
                <FaGoogle className='text-red-500' /> Login with Google
              </button>
              <button type='button' className="flex items-center cursor-pointer justify-center gap-2 w-full py-3 border border-gray-300 rounded-full bg-white text-sm font-semibold text-gray-700 hover:bg-gray-100">
                <FaFacebookF className='text-blue-600' /> Login with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
