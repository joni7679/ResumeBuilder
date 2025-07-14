import React from 'react'
import Sidebar from './Sidebar'
import ProfileHeader from './ProfileHeader'
import { Outlet } from 'react-router-dom'

function MainContent() {
    return (
        <>
            <main>
               
                <div className='flex  justify-center  items-start '>
                    <div className='w-[20%]'>
                        <Sidebar />
                    </div>
                    <div className='w-[80%]'>
                        <Outlet />
                    </div>
                </div>
            </main>

        </>
    )
}

export default MainContent