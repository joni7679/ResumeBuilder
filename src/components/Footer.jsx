import React from "react";
import { socialLinks } from "../constants/sociallinks";

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-br from-[#131010] via-[#1b1f23] to-[#232946] text-white pt-0 pb-10 overflow-hidden shadow-2xl">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8 text-sm relative z-10 divide-y-0 md:divide-x md:divide-gray-800 pt-10">
                <div className="md:pr-8 flex flex-col items-start">
                    <h2 className="text-orange-500 font-semibold mb-2 flex items-center gap-2">
                        Resume Builder
                        <span className="animate-pulse text-yellow-400 text-lg">•</span>
                    </h2>
                    <p className="text-gray-300 mb-4">
                        Create your resume in a minute, get your dream job in a blink.
                    </p>
                    <div className="flex gap-4 text-xl">
                        {
                            socialLinks.map((val, index) => {
                                 const IconItem = val.icon;
                                return (
                                    <>
                                        <a key={index} href="#" className="text-white hover:text-orange-400 transition-transform transform hover:scale-125 focus:outline-none" aria-label={val.icon}>
                                            <IconItem />
                                        </a>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="md:px-8 pt-8 md:pt-0 flex flex-col items-start">
                    <h2 className="text-white font-semibold mb-2 border-b-2 border-gradient-to-r from-orange-400 to-pink-500 inline-block pb-1">Terms & Policies</h2>
                    <ul className="space-y-1 text-gray-300">
                        <li><p className="hover:text-orange-400">Terms of Service</p></li>
                        <li><p className="hover:text-orange-400">Privacy Policy</p></li>
                    </ul>
                </div>
                <div className="md:px-8 pt-8 md:pt-0 flex flex-col items-start">
                    <h2 className="text-white font-semibold mb-2 border-b-2 border-gradient-to-r from-blue-400 to-purple-500 inline-block pb-1">Company</h2>
                    <ul className="space-y-1 text-gray-300">
                        <li><p className="hover:text-orange-400">Home</p></li>
                        <li><p className="hover:text-orange-400">About Us</p></li>
                        <li><p className="hover:text-orange-400">Contact Us</p></li>
                    </ul>
                </div>
                <div className="md:pl-8 pt-8 md:pt-0 flex flex-col items-start">
                    <h2 className="text-white font-semibold mb-2 border-b-2 border-gradient-to-r from-green-400 to-blue-500 inline-block pb-1">Contact</h2>
                    <p className="text-gray-300 flex items-center gap-2 cursor-pointer hover:text-orange-400" title="Click to copy">
                        7679xxxxx
                    </p>
                    <p className="text-gray-300 flex items-center gap-2 cursor-pointer hover:text-orange-400" title="Click to copy">
                        resumebuilder12@gmail.com
                    </p>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-xs relative z-10 animate-fade-in">
                © 2025 ResumeBuilder. All rights reserved.
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="ml-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow hover:scale-110 transition-transform duration-300 text-xs focus:outline-none">Back to Top</button>
            </div>
        </footer>
    );
};

export default Footer;
