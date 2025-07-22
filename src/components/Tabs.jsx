import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Skills from "./Skills";
import WorkEXperience from "./WorkEXperience";
import Projects from "./Projects";
import { FaEye } from "react-icons/fa";

const Tabs = () => {
    const [popup, setPopup] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [formData, setFormData] = useState({
        personalInfo: {
            fullName: "",
            email: "",
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

    const tabs = [
        {
            label: "Personal Info",
            component: (
                <PersonalInfo
                    data={formData.personalInfo}
                    setFormData={setFormData}
                />
            ),
        },
        {
            label: "Education",
            component: (
                <Education
                    data={formData.education}

                />
            ),
        },
        {
            label: "Skills",
            component: (
                <Skills
                    data={formData.skills}

                />
            ),
        },
        {
            label: "Work Experience",
            component: (
                <WorkEXperience
                    data={formData.experience}

                />
            ),
        },
        {
            label: "Projects",
            component: (
                <Projects
                    data={formData.projects}
                />
            ),
        },
    ];

    const popupBox = () => setPopup(!popup);
    const ActiveTabComponent = tabs[activeTab].component;
    // handel next
    const handleNext = () => {
        setActiveTab(activeTab + 1);

    }
    // handle prev
    const handlePrev = () => {
        setActiveTab(activeTab - 1);
    }

    return (
        <div className="w-full h-screen overflow-scroll relative">
            <button
                onClick={popupBox}
                className="flex cursor-pointer duration-300 ease-in items-center gap-2 px-5 py-3 rounded-md bg-blue-700 text-white"
            >
                <FaEye className="text-xl" />
                <span>Preview</span>
            </button>

            {popup && (
                <div
                    onClick={popupBox}
                    className={`fixed top-0 left-0 w-full h-full ${popup ? "overly" : ""} bg-opacity-40 z-10`}
                ></div>
            )}

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
                        <button className="bg-green-700 w-full cursor-pointer px-4 py-6 rounded text-white hover:bg-green-800">
                            Save & Submit
                        </button>
                    )}

                </div>

                <div className="mt-5 w-full  flex items-center justify-center gap-2.5">
                    {activeTab > 0 && (
                        <button
                            onClick={handlePrev}
                            className='px-[25px] w-1/2 text-white mt-5 py-[15px] cursor-pointer duration-100 rounded-md bg-blue-800'
                        >
                            Prev
                        </button>
                    )}

                    {activeTab < tabs.length - 1 && (
                        <button
                            onClick={handleNext}
                            className='px-[25px] w-1/2 text-white mt-5 py-[15px] cursor-pointer duration-100 rounded-md bg-blue-800'
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Tabs;
