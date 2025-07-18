import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { RxCross1 } from "react-icons/rx";

function MainContent() {
    const [open, setIsOpen] = useState(true); 

    return (
        <main className="relative">
           
            <button
                onClick={() => setIsOpen(!open)}
                className="absolute  cursor-pointer top-4 left-4 z-50 text-2xl text-gray-700 bg-white p-2 rounded-full shadow-md transition-all duration-300 hover:rotate-90"
            >
            {
                open ? <FaBars /> : <RxCross1  className="rotate-90" />
            }
            </button>

         
            <div className="flex min-h-screen transition-all duration-300">
             
                <div
                    className={`transition-all duration-500 ease-in-out bg-gray-800 text-white ${open ? 'w-[250px]' : 'w-0'
                        } overflow-hidden`}
                >
                    <Sidebar />
                </div>

              
                <div
                    className={`transition-all duration-500 ease-in-out ${open ? 'w-[calc(100%-250px)]' : 'w-full'
                        }`}
                >
                    <Outlet />
                </div>
            </div>
        </main>
    );
}

export default MainContent;
