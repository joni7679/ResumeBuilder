import React, { useState } from 'react'
import Sidebar from './Sidebar'
import ProfileHeader from './ProfileHeader'
import { Outlet } from 'react-router-dom'

function MainContent() {
    const [open, setIsOpen] = useState(false);



    return (
        <>
            <main>

                <div className='flex  justify-center  items-start relative '>
                    <div className={` ${open ? "w-[20%]" : "w-[20%]"}`}>
                        <Sidebar  open={open} setIsOpen={setIsOpen}/>
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