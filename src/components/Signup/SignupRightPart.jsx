import React from 'react'
import { CiUser } from 'react-icons/ci'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { TbPasswordFingerprint } from 'react-icons/tb'

function SingupRightpart() {
    return (
        <>
            <div class="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                    <h2 class=" font-bold leading-tight text-black sm:text-4xl">Welcome Our Resume Bulider!</h2>
                    <p class="mt-2 text-base text-gray-600">Already have an account? <a href="#" title="" class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Login</a></p>

                    <form method="POST" class="mt-8">
                        <div class="space-y-5">
                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Fast & Last name </label>
                                <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <CiUser />

                                    </div>

                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Enter your full name"
                                        class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Email address </label>
                                <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <MdOutlineAlternateEmail />
                                    </div>
                                    <input
                                        type="email"
                                        name=""
                                        id=""
                                        placeholder="Enter email to get started"
                                        class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label for="" class="text-base font-medium text-gray-900"> Password </label>
                                <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <TbPasswordFingerprint />
                                    </div>

                                    <input
                                        type="password"
                                        name=""
                                        id=""
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
                                    Sign up
                                </button>
                            </div>
                        </div>
                    </form>

                    <div class="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <button
                            class="relative text-sm font-semibold items-center justify-center w-full px-4 py-4   text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-full hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                        >
            
                            Sign up with Google
                        </button>

                        <button
                           
                            class="relative text-sm  items-center justify-center w-full px-4 py-4  font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-full hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                        >
                            
                            Sign up with Facebook
                        </button>

                    </div>


                </div>
            </div>

        </>
    )
}

export default SingupRightpart