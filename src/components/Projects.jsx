import React, { useState } from 'react'
import InputField from './InputField';
import TextareaField from './TextareaField';
import { toast, ToastContainer } from 'react-toastify';
import { Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Projects({ errors }) {
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
        }

        if (!githubRepo) {
            toast.error('Please enter projectLink');
            return false;
        }

        else if (!urlRegex.test(githubRepo)) {
            toast.error("Please enter Valid Link")
        }
        return true;
    };
    const handleAddProject = () => {
        let isValid = validate()
        if (!isValid) return
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
            </div>
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