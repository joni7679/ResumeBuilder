import React, { useState } from 'react'
import { navlinkItems } from '../constants/Navlink'
import { Link } from 'react-router-dom'
import { HiOutlineMenu, HiX } from 'react-icons/hi';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="w-full bg-white shadow-lg sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 lg:h-20">

                        <Link to="/" className="text-2xl font-bold text-blue-600">
                            Resume <span className="text-orange-500">Builder</span>
                        </Link>


                        <div className="hidden lg:flex items-center space-x-10">
                            {navlinkItems.map((navlink, index) => (
                                <Link
                                    key={index}
                                    to={navlink.path}
                                    className="text-gray-700 text-lg hover:text-blue-600 transition-all duration-200"
                                >
                                    {navlink.link}
                                </Link>
                            ))}
                        </div>


                        <div className="hidden lg:flex items-center gap-3">
                            <Link  to={`/signup`}  className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md shadow cursor-pointer">
                                Signup
                            </Link>
                            <Link className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md shadow cursor-pointer">
                                Login
                            </Link>
                        </div>


                        <div className="lg:hidden">
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="text-2xl text-gray-700 focus:outline-none"
                            >
                                {menuOpen ? <HiX /> : <HiOutlineMenu />}
                            </button>
                        </div>
                    </div>


                    {menuOpen && (
                        <div className="lg:hidden mt-2 bg-white shadow rounded-md py-4 px-4 space-y-3">
                            {navlinkItems.map((navlink, index) => (
                                <Link
                                    key={index}
                                    to={navlink.path}
                                    onClick={() => setMenuOpen(false)}
                                    className="block text-gray-700 text-base hover:text-blue-600 transition-all"
                                >
                                    {navlink.link}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-2 pt-3">
                                <Link className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md shadow cursor-pointer">
                                    Signup
                                </Link>
                                <Link className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md shadow cursor-pointer">
                                    Login
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>


        </>
    )
}

export default Navbar