import React, { useEffect, useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Skills from './Skills';
import WorkEXperience from './WorkEXperience';
import Projects from './Projects';
import { data } from 'react-router-dom';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("personal");
    const [formData, setFormData] = useState({
        personalInfo: {
            fullName: "",
            email: "",
            phone: "",
            address: "",
            dob: "",
            linkedin: "",
            github: "",
            portfolio: ""
        },
        education: [],
        skills: [],
        experience: [],
        projects: []
    });



    const tabs = [
        { id: "personal", label: "Personal Info" },
        { id: "education", label: "Education" },
        { id: "skills", label: "Skills" },
        { id: "work experience", label: "work experience" },
        { id: "projects", label: "projects" }
    ];

    const renderTab = () => {
        switch (activeTab) {
            case "personal":
                return <PersonalInfo data={formData.personalInfo} setData={(updated) =>
                    setFormData({ ...formData, personalIfo: updated })
                } />;
            case "education":
                return <Education data={data.education} setData={(updated) => { setFormData({ ...formData, education: updated }) }} />;
            case "skills":
                return <Skills data={data.skills} setData={(updated) => { setFormData({ ...formData, skills: updated }) }} />;
            case "work experience":
                return <WorkEXperience data={data.WorkEXperience} setData={(updated) => { setFormData({ ...formData, WorkEXperience: updated }) }} />
            case "projects":
                return <Projects data={data.projects} setData={(updated) => { setFormData({ ...formData, projects: updated }) }} />
            default:
                return <PersonalInfo />;
        }
    };

    //  Load from localStorage
    useEffect(() => {
        const save = localStorage.getItem("resumeData");
        if (save) {
            setFormData(JSON.parse(save))
        }
    }, []);

    // Save to localStorage on formData chang
    useEffect(() => {
        localStorage.setItem("resumeData", JSON.stringify(formData));
    }, [formData])

    return (
        <div className="w-full p-4 flex items-start gap-4 flex-col md:flex-row">
            <div className="md:w-[20%] flex flex-col gap-4 bg-gray-900 text-white p-5 rounded-xl">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`cursor-pointer border px-4 py-2 rounded-2xl transition-all duration-300 ${activeTab === tab.id
                            ? "bg-white text-black"
                            : "border-white text-white"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="p-4 border rounded  md:w-[60%] w-full">
                {renderTab()}
            </div>
        </div>
    );
};

export default Tabs;
