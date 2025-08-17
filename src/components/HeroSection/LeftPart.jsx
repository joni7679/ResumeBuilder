import React, { useContext, useRef } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
gsap.registerPlugin(SplitText);

function LeftPart() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const headingRef = useRef();
    const subHeadingRef = useRef();

    const checkUserisLoginIsNot = () => {
        if (!user) {
            toast.error('Plz Login First');
            setTimeout(() => navigate(`/login`), 1000);
        } else {
            navigate(`dashboard/resume-Marker`);
        }
    };

    useGSAP(() => {
        if (!headingRef.current || !subHeadingRef.current) return;

        const splitSub = new SplitText(subHeadingRef.current, { type: 'lines' });
        gsap.from(splitSub.lines, {
            duration: 1.2,
            yPercent: 100,
            stagger: 0.08,
            ease: 'expo.out',
        });

        const splitHeading = new SplitText(headingRef.current, { type: 'words,chars' });
        gsap.from(splitHeading.chars, {
            duration: 1.5,
            yPercent: 100,
            autoAlpha: 0,
            stagger: 0.05,
            ease: 'expo.out',
        });
        gsap.from("span", {
            scale: 0.6,
            duration: 1.2,
            yPercent: 100,
            stagger: 0.08,
            ease: 'expo.out',
        })
    }, []);

    return (
        <div className="space-y-6">
            <span className="inline-block  bg-blue-100 text-blue-600 font-semibold px-3 py-1 rounded-full text-xs mb-2 animate-fade-in">
                Welcome to Resume Builder
            </span>

            <h1
                ref={headingRef}
                className="text-4xl heading md:text-5xl font-extrabold mb-4 bg-gradient-to-r text-black drop-shadow-lg"
            >
                Build Your Professional Resume
            </h1>

            <p
                ref={subHeadingRef}
                className="sub-heading text-gray-500 text-lg md:text-xl mb-8 leading-relaxed"
            >
                Create a standout resume in minutes with our easy-to-use resume builder.
                <br />
                Choose from multiple templates and download your resume as a PDF.
            </p>

            <button
                onClick={checkUserisLoginIsNot}
                className="bg-gradient-to-r cursor-pointer from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg shadow-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 group"
            >
                <svg
                    className="w-5 h-5 text-white group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                Build Your Resume Now
            </button>
            <ToastContainer />
        </div>
    );
}

export default LeftPart;
