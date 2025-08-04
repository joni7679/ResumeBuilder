import React, { useState } from 'react'
import InputField from './InputField';
import TextareaField from './TextareaField';
import { toast, ToastContainer } from 'react-toastify';
import { Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from '@reduxjs/toolkit';
import { data } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function Projects({ errors, data, setFormData }) {
    const [currentProject, setCurrentProject] = useState({
        projectTitle: "",
        techSkills: "",
        projectDescription: "",
        projectLink: "",
        githubRepo: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentProject((prev) => ({ ...prev, [name]: value }));
    };


    const validate = () => {
        const { projectTitle, techSkills, projectDescription, projectLink, githubRepo } = currentProject;
        const titleRegex = /^[a-zA-Z\s]+$/;
        const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w]{2,}(\/\S*)?$/;
        if (!projectTitle) {
            toast.error('Please enter your projectTitle');
            return false;
        }
        else if (!titleRegex.test(projectTitle)) {
            toast.error("Please enter a valid Project Name")
            return false;
        }
        if (!techSkills) {
            toast.error('Please enter the techSkills');
            return false;
        }
        if (!projectDescription) {
            toast.error('Please enter projectDescription');
            return false;
        }
        if (!projectLink) {
            toast.error('Please enter projectLink');
            return false;
        }
        else if (!urlRegex.test(projectLink)) {
            toast.error("Please enter Valid Link")
            return false;
        }

        if (!githubRepo) {
            toast.error('Please enter projectLink');
            return false;
        }

        else if (!urlRegex.test(githubRepo)) {
            toast.error("Please enter Valid Link")
            return false;
        }

        return true;
    };
    const handleAddProject = () => {
        let isValid = validate()
        if (!isValid) return


        const newProject = {
            id: nanoid(),
            projectTitle: currentProject.projectTitle,
            techSkills: currentProject.techSkills,
            projectDescription: currentProject.projectDescription,
            projectLink: currentProject.projectLink,
            githubRepo: currentProject.githubRepo
        }
       
        // push data logic here
        setFormData(prev => ({
            ...prev,
            projects: [...prev.projects, newProject]
        }));
        setCurrentProject({
            projectTitle: "",
            techSkills: "",
            projectDescription: "",
            projectLink: "",
            githubRepo: ""
        })
        toast.success("Project  added successfully!");
    };

    return (
        <>
            <div className="project-form-container info">
                <h2 className="project-form-title text-black font-semibold">Add Your Project Details</h2>

                <InputField
                    label="Project Title"
                    name="projectTitle"
                    placeholder="Enter your project title"
                    value={currentProject.projectTitle}
                    onChange={handleInputChange}
                />

                <InputField
                    label="Tech Skills Used"
                    name="techSkills"
                    placeholder="e.g. React, Node.js, MongoDB"
                    value={currentProject.techSkills}
                    onChange={handleInputChange}
                />

                <TextareaField
                    label="Project Description"
                    name="projectDescription"
                    placeholder="Write a detailed description of your project"
                    value={currentProject.projectDescription}
                    onChange={handleInputChange}
                />

                <InputField
                    label="Project Link"
                    name="projectLink"
                    placeholder="Enter project live link (if any)"
                    value={currentProject.projectLink}
                    onChange={handleInputChange}
                />

                <InputField
                    label="GitHub Repository"
                    name="githubRepo"
                    placeholder="Enter GitHub repo link"
                    value={currentProject.githubRepo}
                    onChange={handleInputChange}
                />
                {errors.projects && <p className='text-sm text-red-600'>{errors.projects}</p>}
                <button onClick={handleAddProject} type='button' className="submit- bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md shadow cursor-pointer">
                    Add projects
                </button>

                {
                    data.length > 0 &&
                    <div className="project-list-container p-2">
                        <h2 className="project-list-title text-black font-semibold">Your Projects</h2>
                        {data.map((v, i) => {
                            const { projectTitle, techSkills, projectDescription, projectLink, githubRepo } = v
                            return (

                                <div div key={i} className="project-list-item shadow p-3 bg-gray-300 rounded-2xl mt-2" >
                                    <div >
                                        <div className="flex justify-between items-start mb-2">
                                            <h2 className="text-xl font-semibold mt-3 text-gray-800">
                                                {projectTitle}
                                            </h2>

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
                                </div>
                            )
                        })}

                    </div>


                }
            </div >
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
            />
        </>
    )
}

export default Projects