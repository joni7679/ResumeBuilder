import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

function Projects({ data }) {
    return (
        <>
            <div className='w-full mx-w-md mx-auto  p-6 shadow-lg rounded-2xl mt-5'>
                <div className=''>
                    <h1 className='text-2xl font-semibold text-black'>Projects</h1>
                </div>
                {
                    data.projects.length > 0 &&
                    data.projects.map((project, index) => {
                        const { projectTitle, techSkills, projectDescription, projectLink, githubRepo } = project

                        return (
                            <div key={index}>
                                <div className="flex justify-between items-start mb-2">
                                    <h2 className="text-xl font-semibold mt-3 text-gray-800">
                                        {projectTitle}
                                    </h2>
                                    {/* <p className="text-sm text-gray-500 font-medium">10 April - 20 May</p> */}
                                </div>

                                <div className="flex items-center gap-4 mb-4 text-blue-600">
                                    <a
                                        href={projectLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 hover:underline"
                                    >
                                        Live <FaExternalLinkAlt className="text-sm" />
                                    </a>
                                    <a
                                        href={githubRepo}
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
                                        {techSkills}
                                    </span>
                                </div>
                                <div className="mb-1">
                                    <span className="font-semibold text-gray-700">Description:</span>
                                    <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                                        {projectDescription}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
                <div>
                    <h1 className='text-black'>NO Add Any Projects</h1>
                </div>

            </div>

        </>
    )
}

export default Projects