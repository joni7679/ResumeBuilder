import React, { useContext, useState, useRef, useEffect } from 'react';
import { navlinkItems } from '../constants/Navlink';
import { Link } from 'react-router-dom';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import { AuthContext } from '../Context/AuthContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ToastContainer } from 'react-toastify';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const navitems = useRef([]);
    const desktopItems = useRef([]);
    const { user } = useContext(AuthContext);
    useGSAP(() => {
        gsap.from(
            desktopItems.current,
            { yPercent: -100, opacity: 0.3, ease: "expo.out" },

        );
    }, []);

    // Mobile menu animation logic here
    useGSAP(() => {
        let tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (menuOpen) {
            tl.fromTo(menuRef.current,
                { x: '100%', y: 100, opacity: 0 },
                { x: '0%', y: 0, opacity: 1, duration: 0.6 },
            );

            tl.fromTo(
                navitems.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.15, duration: 0.5 },
                "-=0.3"
            );
        } else {
            tl.to(menuRef.current, {
                x: '100%',
                y: 100,
                opacity: 0,
                duration: 0.5
            });
        }
    }, [menuOpen]);

    return (
        <>
            <ToastContainer />
            <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8  bg-[#E6EFFC] backdrop-blur-md shadow-xl sticky top-0 z-50 rounded-b-2xl transition-all duration-300">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center h-16 lg:h-20">
                        <Link to="/" className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-orange-500 bg-clip-text text-transparent flex items-center gap-2">
                            Resume <span className="text-orange-500">Builder</span>
                        </Link>
                        <div className="hidden lg:flex items-center space-x-10">
                            {navlinkItems.map((navlink, index) => (
                                <Link key={index} ref={(el) => (desktopItems.current[index] = el)} className="text-gray-600 capitalize text-lg font-medium px-2 py-1 rounded transition-all duration-200 hover:text-blue-500 hover:bg-blue-100/10 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#1b1f23]">
                                    {navlink.link}
                                </Link>
                            ))}
                        </div>
                        {/* Desktop Auth Buttons */}
                        <div className="hidden lg:flex items-center gap-3">
                            {!user ? (
                                <>
                                    <Link
                                        ref={(el) => (desktopItems.current[navlinkItems.length] = el)}
                                        to={`/signup`}
                                        className="bg-gradient-to-r from-blue-500text-white px-5 py-2 rounded-md shadow transition-all duration-200 focus:outline-none bg-green-500 focus:ring-2 focus:ring-blue-400">
                                        Signup
                                    </Link>
                                    <Link
                                        ref={(el) => (desktopItems.current[navlinkItems.length + 1] = el)}
                                        to={`/login`}
                                        className="bg-blue-500 text-white px-5 py-2 rounded-md shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    >
                                        Login
                                    </Link>
                                </>
                            ) : (
                                <Link
                                    ref={(el) => (desktopItems.current[navlinkItems.length] = el)}
                                    to={`/dashboard`}
                                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-5 py-2 rounded-md shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                >
                                    Go To Dashboard
                                </Link>
                            )}
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="lg:hidden text-white text-3xl cursor-pointer z-50" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} tabIndex={0} onKeyDown={e => { if (e.key === 'Enter') setMenuOpen(!menuOpen); }}>
                            {menuOpen ? <HiX /> : <HiOutlineMenu />}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile menu overlay */}
            {menuOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300" onClick={() => setMenuOpen(false)} aria-hidden="true"></div>
            )}

            {/* Mobile menu */}
            <div
                ref={menuRef}
                className={`fixed top-[10%] right-0 w-2/3 sm:w-1/2 h-full bg-[#1b1f23]/95 backdrop-blur-lg shadow-2xl z-50 lg:hidden flex flex-col items-start p-8 gap-8 rounded-l-2xl border-l border-blue-900 transition-transform duration-500 ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}
                role="menu"
                aria-label="Mobile navigation menu"
            >
                {navlinkItems.map((navlink, index) => (
                    <Link
                        ref={(el) => { navitems.current[index] = el }}
                        key={index}
                        onClick={() => setMenuOpen(false)}
                        className="text-gray-200 text-xl capitalize font-semibold hover:text-blue-400 hover:bg-blue-100/10 px-4 py-2 rounded transition duration-200 w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-400"
                        role="menuitem"
                    >
                        {navlink.link}
                    </Link>
                ))}
                {!user ? (
                    <>
                        <Link
                            to="/signup"
                            onClick={() => setMenuOpen(false)}
                            className="bg-green-500 text-white px-4 py-2 rounded-md shadow w-full text-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            role="menuitem">
                            Signup
                        </Link>
                        <Link

                            to="/login"
                            onClick={() => setMenuOpen(false)}
                            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-4 py-2 rounded-md shadow w-full text-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            role="menuitem"
                        >
                            Login
                        </Link>
                    </>
                ) : (
                    <Link

                        to="/dashboard"
                        onClick={() => setMenuOpen(false)}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-md shadow w-full text-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        role="menuitem"
                    >
                        Go To Dashboard
                    </Link>
                )}
            </div>
        </>
    );
}

export default Navbar;
