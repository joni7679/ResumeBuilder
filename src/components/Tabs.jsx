import React, { useEffect, useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Skills from "./Skills";
import WorkEXperience from "./WorkEXperience";
import Projects from "./Projects";
import { FaCloudDownloadAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResumeDocument from "../Dashboard/user/components/ResumeDoucment";
import Resume from "../Dashboard/user/Pages/Resume";
import { LuSave } from "react-icons/lu";
import { GrPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import DownloadResumePreviewPoPUp from "../Dashboard/user/components/DownloadResumePreviewPoPUp";
const Tabs = () => {
    const [isSubmit, setIsSeubmit] = useState(false);
    const [errors, setErrors] = useState({})
    const [popup, setPopup] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [skipExperience, setSkipExperience] = useState(false);
    const [formData, setFormData] = useState({
        personalinfo: {
            fullName: "",
            email: "",
            jobtitle: "",
            phone: "",
            address: "",
            dob: "",
            linkedin: "",
            github: "",
            portfolio: "",
            summary: ""
        },
        education: [],
        skills: [],
        experience: [],
        projects: [],
    });


    // skip logic here..
    const handleSkipExperience = () => {
        setSkipExperience(true);
        setActiveTab(prev => prev + 1);
    };

    // validation logic here
    function validation(step) {
        const error = {};
        const { personalinfo, education, skills, experience, projects } = formData;

        const nameRegex = /^[a-zA-Z\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[6-9]\d{9}$/;
        const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w]{2,}(\/\S*)?$/;
        if (step === 0) {
            // Full Name
            if (!personalinfo.fullName.trim()) {
                error.fullName = "Name is required";
            } else if (personalinfo.fullName.length < 2) {
                error.fullName = "Name must be at least 2 characters";
            } else if (!nameRegex.test(personalinfo.fullName)) {
                error.fullName = "Only letters allowed";
            }

            // Email
            if (!personalinfo.email.trim()) {
                error.email = "Email is required";
            } else if (!emailRegex.test(personalinfo.email)) {
                error.email = "Invalid email format";
            }

            // Phone
            if (!personalinfo.phone.trim()) {
                error.phone = "Phone Number is required";
            } else if (!phoneRegex.test(personalinfo.phone)) {
                error.phone = "Invalid phone number format";
            }

            // Address
            if (!personalinfo.address.trim()) {
                error.address = "Address is required";
            } else if (personalinfo.address.length < 5) {
                error.address = "Address must be at least 5 characters";
            }

            // DOB
            if (!personalinfo.dob.trim()) {
                error.dob = "Date of Birth is required";
            }

            // jobtitle
            if (!personalinfo.jobtitle.trim()) {
                error.jobtitle = "Name is required";
            } else if (personalinfo.jobtitle.length < 4) {
                error.jobtitle = "Name must be at least 4 characters";
            } else if (!nameRegex.test(personalinfo.jobtitle)) {
                error.jobtitle = "Only letters allowed";
            }


            // LinkedIn
            if (!personalinfo.linkedin.trim()) {
                error.linkedin = "LinkedIn is required";
            } else if (!urlRegex.test(personalinfo.linkedin)) {
                error.linkedin = "Invalid LinkedIn format";
            }

            // GitHub
            if (!personalinfo.github.trim()) {
                error.github = "GitHub is required";
            } else if (!urlRegex.test(personalinfo.github)) {
                error.github = "Invalid GitHub format";
            }

            // Portfolio
            if (!personalinfo.portfolio.trim()) {
                error.portfolio = "Portfolio is required";
            } else if (!urlRegex.test(personalinfo.portfolio)) {
                error.portfolio = "Invalid Portfolio format";
            }

            // Summary
            if (!personalinfo.summary.trim()) {
                error.summary = "Summary is required";
            } else if (personalinfo.summary.length < 10) {
                error.summary = "Summary must be at least 10 characters";
            }

        }
        if (step === 1) {
            // Education loop
            if (education.length < 1) {
                error.education = "Please add at least 1 education.";
            }

        }

        if (step === 2) {
            //  SKILLS
            if (skills.length < 3) {
                error.skills = "Please add at least 3 skills.";
            }
        }

        if (step === 3) {
            //  EXPERIENCE 
            if (!skipExperience && experience.length === 0) {
                error.experience = "Please add at least 1 experience or click 'Skip'.";
            }
        }

        if (step === 4) {
            //  PROJECTS
            if (projects.length === 0) {
                error.projects = "Projects are required.";
            } else if (projects.length < 2) {
                error.projects = "Please add at least 2 projects.";
            }
        }

        if (Object.keys(error).length > 0) {
            setErrors(error);
            return false;
        }

        setErrors({});
        return true;
    }




    const tabs = [
        {
            label: "Personal Info",
            component: (
                <PersonalInfo
                    data={formData.personalinfo}
                    setFormData={setFormData}
                    errors={errors}
                />
            ),
        },
        {
            label: "Education",
            component: (
                <Education
                    data={formData.education}
                    setFormData={setFormData}
                    errors={errors}
                />
            ),
        },
        {
            label: "Skills",
            component: (
                <Skills
                    data={formData.skills}
                    setFormData={setFormData}
                    errors={errors}
                />
            ),
        },
        {
            label: "Work Experience",
            component: (
                <WorkEXperience
                    data={formData.experience}
                    setFormData={setFormData}
                    handleSkipExperience={handleSkipExperience}
                    errors={errors}
                />
            ),
        },
        {
            label: "Projects",
            component: (
                <Projects
                    data={formData.projects}
                    setFormData={setFormData}
                    errors={errors}
                />
            ),
        },
    ];

    const popupBox = () => setPopup(!popup);
    const ActiveTabComponent = tabs[activeTab].component;
    // handel next
    const handleNext = () => {
        const isValid = validation(activeTab);
        console.log("isValid:", isValid);
        if (!isValid) return;
        setActiveTab(activeTab + 1);
    };

    // handle prev
    const handlePrev = () => {
        setActiveTab(activeTab - 1);
    }

    // onsubmit 
    const handleSubmit = () => {
        const isValid = validation(activeTab);
        if (!isValid) return;
        setIsSeubmit(true)
        const existingResumes = JSON.parse(localStorage.getItem("allResumes")) || [];
        const updatedResumes = [...existingResumes, formData];
        localStorage.setItem("allResumes", JSON.stringify(updatedResumes));
        
       
    }

  


    // useeffect useed to data parse localstorage 
    useEffect(() => {
        localStorage.setItem("resumeData", JSON.stringify(formData));
    }, [formData]);

    // useeffect used to data show json.parse ...
    useEffect(() => {
        const savedData = localStorage.getItem("resumeData");
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    localStorage.setItem("resumeData", JSON.stringify(formData));

    return (
        <div className="w-full h-screen overflow-scroll relative">
            <ToastContainer position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce} />
            {popup && (
                <>
                    <div onClick={popupBox} className={`fixed top-0 left-0 w-full h-full  ${popup ? "overly" : ""} z-40`}>
                    </div>

                    <div className="left-1/2 transform -translate-x-1/2 -translate-y-1/2   bg-white fixed top-1/2 w-[95%] md:w-[70%] max-h-[90vh] overflow-y-auto rounded-xl shadow-xl p-6   animate-popup z-50">
                        {/* <ResumeDocument data={formData} /> */}
                        <Resume data={formData} />
                    </div>
                </>
            )}
            {
                isSubmit
                &&
                <div className="left-1/2 transform -translate-x-1/2 -translate-y-1/2   bg-white fixed top-1/2 w-[95%] md:w-[70%] max-h-[90vh] overflow-y-auto rounded-xl shadow-xl p-6   animate-popup z-50">
                    <DownloadResumePreviewPoPUp />
                </div>
            }



            <button
                onClick={popupBox}
                className="flex cursor-pointer duration-300 ease-in items-center gap-2 px-5 py-3 rounded-md bg-blue-700 text-white mt-4"
            >
                {!popup ? (
                    <>
                        <FaEye className="text-xl" />
                        <span>Preview</span>
                    </>
                ) : (
                    <>
                        <FaEyeSlash />
                        <span>Close</span>
                    </>
                )}
            </button>


            <div className="w-full p-4">
                <div className="w-full bg-white rounded-xl p-4">
                    <div className="w-full flex flex-row gap-4 overflow-x-auto scrollbar-hide p-4">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`flex-shrink-0 w-[200px] px-4 py-3 text-left cursor-pointer text-sm font-medium rounded-2xl border transition-all duration-300 ${activeTab === index
                                    ? "bg-[#E5F0FF] text-black border-blue-400"
                                    : "bg-[#FAFCFE] text-gray-700 border-gray-200 hover:bg-blue-50"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="w-full mt-5 bg-white rounded-xl p-6 shadow-sm">
                    {ActiveTabComponent}
                </div>
                <div className="mt-5 w-full ">

                    {activeTab === tabs.length - 1 && (
                        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">

                            <button
                                onClick={handleSubmit}
                                className="w-full md:w-auto px-6 py-3 flex items-center justify-center gap-2 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium shadow-md transition duration-300">
                                <LuSave className="inline-block" />
                                <span className="mr-2">
                                    Save & Submit
                                </span>
                            </button>
                        </div>
                    )}
                </div>

                <div className="mt-6 w-full flex items-center justify-between gap-4">

                    {activeTab > 0 && (
                        <button
                            onClick={handlePrev}
                            className="w-full md:w-1/2 flex items-center justify-center gap-3 cursor-pointer px-6 py-3 rounded-xl bg-blue-800 text-white font-medium shadow-md transition duration-300 hover:bg-blue-900">
                            <GrPrevious />
                            Prev
                        </button>
                    )}

                    {activeTab < tabs.length - 1 && (
                        <button
                            onClick={handleNext}
                            className="w-full md:w-1/2 px-6 flex items-center justify-center gap-3 cursor-pointer py-3 rounded-xl bg-blue-700 text-white font-medium shadow-md transition duration-300 hover:bg-blue-900">
                            Next
                            <MdNavigateNext className="text-xl" />
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Tabs;
