import React, { useContext, useState } from 'react'
import { navlinkItems } from '../constants/Navlink'
import { Link } from 'react-router-dom'
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { AuthContext } from '../Context/AuthContext';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    let { user, loading, error } = useContext(AuthContext);
    console.log("user is", user);


    return (
        <>
            <nav className="w-full bg-[#1b1f23] shadow-lg sticky top-0 z-50">
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
                                    className="text-gray-200 capitalize text-lg hover:text-blue-600 transition-all duration-200"
                                >
                                    {navlink.link}
                                </Link>
                            ))}
                        </div>

                        {! user ?
                            <div className="hidden lg:flex items-center gap-3">
                                <Link to={`/signup`} className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md shadow cursor-pointer">
                                    Signup
                                </Link>
                                <Link to={`/login`} className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md shadow cursor-pointer">
                                    Login
                                </Link>
                            </div> : (
                                <>
                                    <Link to={`/dashboard`} className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md shadow cursor-pointer">Go To DashBoard</Link>
                                </>
                            )}

                    </div>

                </div>
            </nav>


        </>
    )
}

export default Navbar