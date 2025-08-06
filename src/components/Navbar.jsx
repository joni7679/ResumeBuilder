import React, { useContext, useState, useRef, useEffect } from 'react';
import { navlinkItems } from '../constants/Navlink';
import { Link } from 'react-router-dom';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { AuthContext } from '../Context/AuthContext';
import gsap from 'gsap';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (menuOpen) {
            gsap.fromTo(
                menuRef.current,
                { x: '100%' },
                { x: '0%', duration: 0.5, ease: 'power3.out' }
            );
        } else {
            gsap.to(menuRef.current, {
                x: '100%',
                duration: 0.5,
                ease: 'power3.in',
            });
        }
    }, [menuOpen]);

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
                                    className="text-gray-200 capitalize text-lg hover:text-blue-600 transition-all duration-200">
                                    {navlink.link}
                                </Link>
                            ))}
                        </div>
                        <div className="hidden lg:flex items-center gap-3">
                            {!user ? (
                                <>
                                    <Link
                                        to={`/signup`}
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md shadow">
                                        Signup
                                    </Link>
                                    <Link
                                        to={`/login`}
                                        className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md shadow">
                                        Login
                                    </Link>
                                </>
                            ) : (
                                <Link
                                    to={`/dashboard`}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md shadow"
                                >
                                    Go To Dashboard
                                </Link>
                            )}
                        </div>

                        
                        <div className="lg:hidden text-white text-3xl cursor-pointer z-50" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <HiX /> : <HiOutlineMenu />}
                        </div>
                    </div>
                </div>
            </nav>

          
            <div
                ref={menuRef}
                className="fixed top-0 right-0 w-2/3 sm:w-1/2 h-full bg-[#1b1f23] shadow-lg z-40 lg:hidden flex flex-col items-start p-6 gap-6"
                style={{ transform: 'translateX(100%)' }}
            >
                {navlinkItems.map((navlink, index) => (
                    <Link
                        key={index}
                        to={navlink.path}
                        onClick={() => setMenuOpen(false)}
                        className="text-gray-200 text-xl hover:text-blue-400 transition duration-200"
                    >
                        {navlink.link}
                    </Link>
                ))}
                {!user ? (
                    <>
                        <Link
                            to="/signup"
                            onClick={() => setMenuOpen(false)}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow"
                        >
                            Signup
                        </Link>
                        <Link
                            to="/login"
                            onClick={() => setMenuOpen(false)}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md shadow"
                        >
                            Login
                        </Link>
                    </>
                ) : (
                    <Link
                        to="/dashboard"
                        onClick={() => setMenuOpen(false)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow"
                    >
                        Go To Dashboard
                    </Link>
                )}
            </div>
        </>
    );
}

export default Navbar;
