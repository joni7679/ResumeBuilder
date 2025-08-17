import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
gsap.registerPlugin(SplitText)
function LeftPart() {
    const { user, loading, error } = useContext(AuthContext);
    let navigate = useNavigate()
    // checkuserlog in is not logic here
    const checkUserisLoginIsNot = () => {
        if (!user) {
            toast.error("Plz Login First");
            setTimeout(() => {
                navigate(`/login`)
            }, 1000);
        }
        else {
            console.log(user)
            navigate(`dashboard/resume-Marker`)
        }

    }
    let heading = SplitText.create(".heading", {
        type: "lines, words",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
            return gsap.from(self.words, {
                duration: 1,
                y: 100,
                autoAlpha: 0,
                stagger: 0.05
            });
        }
    });
    let split = new SplitText('.sub-heading', { type: "lines" })
    let tl = gsap.timeline()
    tl.from(split.lines, {
        duration: 1.8,
        yPercent: 100,
        stagger: 0.05,
        ease: "expo.out",

    }, "a");

    tl.from(heading.chars, {
        duration: 1.8,
        yPercent: 100,
        stagger: 0.05,
        ease: "expo.out",
    }, "a");
    

    return (
        <>

            <div>
                <h1 className="text-3xl heading md:text-4xl font-bold text-white mb-4">
                    Build Your Professional Resume
                </h1>
                <p className="sub-heading text-gray-400 text-lg mb-6 leading-relaxed">
                    Create a standout resume in minutes with our easy-to-use resume builder.
                    <br />
                    Choose from multiple templates and download your resume as a PDF.
                </p>
                <button onClick={checkUserisLoginIsNot} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow cursor-pointer">
                    Build Your Resume Now
                </button>
                <ToastContainer />
            </div>
        </>
    )
}

export default LeftPart