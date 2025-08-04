import React from 'react'
import ProfileHeader from '../components/ProfileHeader'
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Education from '../components/Education'

function Resume({ data }) {
    let saveResume = JSON.parse(localStorage.getItem("resumeData"));

    return (
        <>
            <main className='w-full h-screen bg-white overflow-scroll'>
                {saveResume ? (
                    <>
                        <ProfileHeader data={saveResume} />
                        <AboutMe data={saveResume} />
                        <Experience data={saveResume} />
                        <Education data={saveResume} />
                        <Projects data={saveResume} />
                        <Skills data={saveResume} />

                    </>) : (<>
                        <div className='w-full min-h-screen flex items-center justify-center bg-gray-900'>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow cursor-pointer">
                                Create Now First Your Owen Resume...
                            </button>
                        </div>

                    </>)}

            </main>


        </>
    )
}

export default Resume