import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

function Projects() {
    return (
        <>
            <div className='w-full mx-w-md mx-auto  p-6 shadow-lg rounded-2xl mt-5'>
                <div className=''>
                    <h1  className='text-2xl font-semibold'>Projects</h1>
                </div>
                <div >
                    <div className="flex justify-between items-start mb-2">
                        <h2 className="text-xl font-semibold mt-3 text-gray-800">
                            Learning Management System (LMS)
                        </h2>
                        <p className="text-sm text-gray-500 font-medium">10 April - 20 May</p>
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-blue-600">
                        <a
                            href="https://your-live-link.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:underline"
                        >
                            Live <FaExternalLinkAlt className="text-sm" />
                        </a>
                        <a
                            href="https://github.com/your-repo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:underline"
                        >
                            GitHub <FaGithub className="text-lg" />
                        </a>
                    </div>

                    <div className="mb-2">
                        <span className="font-semibold text-gray-700">Tech Stack:</span>{" "}
                        <span className="text-gray-600">
                            React.js, Redux Toolkit, Tailwind CSS, Formik, Yup, Git & GitHub
                        </span>
                    </div>

                    <div className="mb-2">
                        <span className="font-semibold text-gray-700">Role:</span>{" "}
                        Frontend Developer
                    </div>

                    <div className="mb-1">
                        <span className="font-semibold text-gray-700">Description:</span>
                        <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                            Developed a fully functional, scalable Learning Management System
                            with dynamic role-based dashboards for Admin and Users. Integrated
                            powerful UI/UX using Tailwind CSS and implemented secure form
                            validations via Formik and Yup.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Projects