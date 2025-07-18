import React from "react";
import { NavLink } from "react-router-dom";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#131010] text-white py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8  grid md:grid-cols-4 gap-8 text-sm">
               
                <div>
                    <h2 className="text-orange-500 font-semibold mb-2">Resume Builder</h2>
                    <p className="text-gray-300 mb-4">
                        Create your resume in a minute, get your dream job in a blink.
                    </p>
                    <div className="flex gap-4 text-xl">
                        <a href="#" className="text-white hover:text-orange-400">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="text-white hover:text-orange-400">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-white hover:text-orange-400">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-white hover:text-orange-400">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

              
                <div>
                    <h2 className="text-white font-semibold mb-2">Terms & Policies</h2>
                    <ul className="space-y-1 text-gray-300">
                        <li><NavLink to="/terms" className="hover:text-orange-400">Terms of Service</NavLink></li>
                        <li><NavLink to="/privacy" className="hover:text-orange-400">Privacy Policy</NavLink></li>
                    </ul>
                </div>

                
                <div>
                    <h2 className="text-white font-semibold mb-2">Company</h2>
                    <ul className="space-y-1 text-gray-300">
                        <li><NavLink to="/" className="hover:text-orange-400">Home</NavLink></li>
                        <li><NavLink to="/about" className="hover:text-orange-400">About Us</NavLink></li>
                        <li><NavLink to="/contact" className="hover:text-orange-400">Contact Us</NavLink></li>
                    </ul>
                </div>

               
                <div>
                    <h2 className="text-white font-semibold mb-2">Contact</h2>
                    <p className="text-gray-300" >7679xxxxx</p>
                    <p className="text-gray-300">resumebuilder12@gmail.com</p>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-xs">
               © 2025 ResumeBuilder. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
