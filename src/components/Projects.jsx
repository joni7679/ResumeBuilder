import React, { useState } from 'react'
import InputField from './InputField';
import TextareaField from './TextareaField';

function Projects() {
    const [formData, setFormData] = useState({
        projectTitle: "",
        techSkills: "",
        features: "",
        projectDescription: "",
        projectLink: "",
        githubRepo: "",
    });
    return (
        <>
            <div className="project-form-container info">
                <h2 className="project-form-title">Add Your Project Details</h2>

                <InputField
                    label="Project Title"
                    name="projectTitle"
                    placeholder="Enter your project title"
                 
                />

                <InputField
                    label="Tech Skills Used"
                    name="techSkills"
                    placeholder="e.g. React, Node.js, MongoDB"
                   
                />

                <TextareaField
                    label="Project Features"
                    name="features"
                    placeholder="Describe the key features of your project"
                   
                />

                <TextareaField
                    label="Project Description"
                    name="projectDescription"
                    placeholder="Write a detailed description of your project"
                   
                />

                <InputField
                    label="Project Link"
                    name="projectLink"
                    placeholder="Enter project live link (if any)"
                    
                />

                <InputField
                    label="GitHub Repository"
                    name="githubRepo"
                    placeholder="Enter GitHub repo link"
                    
                />

                <button className="submit- bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md shadow cursor-pointer">
                    Add projects
                </button>
            </div>


        </>
    )
}

export default Projects