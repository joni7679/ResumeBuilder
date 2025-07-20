import React, { useEffect, useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Skills from './Skills';
import WorkEXperience from './WorkEXperience';
import Projects from './Projects';
import { data } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

const Tabs = () => {

    const [pouup, setPopUp] = useState(false);

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

    // pouup logic here...
    const poupBox = () => {
        setPopUp(!pouup);
        

    }

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
        <div className='w-full h-screen overflow-scroll  relative'>
            <button onClick={poupBox} className='px-[25px] py-[15px] rounded-md bg-blue-700 cursor-pointer'>
                <FaEye className='text-xl' />

            </button>
            <div onClick={poupBox} className={`${pouup ? "overly absolute top-0 z-9 left-0 w-full h-full cursor-pointer" : " "} `}></div>
            <div className="w-full  p-4">
                <div className=" w-full bg-white rounded-xl p-4">
                    <div className="w-full info flex flex-row gap-4 overflow-x-auto scrollbar-hide p-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-shrink-0 w-[200px] px-4 py-3 text-left cursor-pointer text-sm font-medium rounded-2xl border transition-all duration-300
                                 ${activeTab === tab.id
                                        ? "bg-[#E5F0FF] text-black border-blue-400"
                                        : "bg-[#FAFCFE] text-gray-700 border-gray-200 hover:bg-blue-50"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                </div>

                <div className="w-full mt-5  bg-white rounded-xl  p-6 shadow-sm">
                    {renderTab()}
                </div>
            </div>
        </div>


    );
};

export default Tabs;
