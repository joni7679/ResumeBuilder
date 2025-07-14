import React from 'react'
import ProfileHeader from '../components/ProfileHeader'
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

function Resume() {
    return (
        <>
            <main className='w-full h-screen overflow-scroll'>
                <ProfileHeader />
                <AboutMe />
                <Experience />
                <Skills />
                <Projects />
            </main>


        </>
    )
}

export default Resume