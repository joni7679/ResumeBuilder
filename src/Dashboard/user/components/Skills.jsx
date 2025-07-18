import React from 'react'

function Skills() {

    let skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap 5",
        "Tailwind CSS",
        "GSAP",
        "AOS",
        "Git",
        "GitHub",
        "React.js",
        "Firebase",
        "REST API",
        "Responsive Design",
        "UI/UX Design",
        "Figma",
        "Canvas Animation",
        "Shery.js",
        "Locomotive.js"
    ]
    return (
        <>

            <div className="w-full mx-w-md mx-auto  p-6 shadow-lg rounded-2xl mt-5">
                <h2 className="text-2xl font-bold mb-4 text-black">Skills </h2>
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="px-4 py-1 text-sm border border-gray-300 rounded-full bg-white text-gray-800 hover:bg-gray-100 transition"
                        >
                            {skill}
                        </span>
                    ))}
                    <button className="px-4 py-1 text-sm border border-gray-400 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700">
                        + Add New Skill
                    </button>
                </div>
            </div>
        </>
    )
}

export default Skills