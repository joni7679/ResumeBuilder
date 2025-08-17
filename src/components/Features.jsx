import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { CgLayoutGrid } from "react-icons/cg";
import { FiFileText } from "react-icons/fi";
import { GiLightBulb } from "react-icons/gi";
import { LuMousePointerClick } from "react-icons/lu";

gsap.registerPlugin(SplitText, ScrollTrigger);

const features = [
    {
        icon: <LuMousePointerClick className="w-8 h-8 text-blue-600 text-2xl" />,
        title: "Easy to Use",
        description: "Get started quickly and with ease.",
    },
    {
        icon: <CgLayoutGrid className="w-8 h-8 text-blue-600 text-2xl" />,
        title: "Multiple Templates",
        description: "Pick from a variety of designs.",
    },
    {
        icon: <FiFileText className="w-8 h-8 text-blue-600 text-2xl" />,
        title: "Export as PDF",
        description: "Save your resume in a downloadable format.",
    },
    {
        icon: <GiLightBulb className="w-8 h-8 text-blue-600 text-2xl" />,
        title: "AI-Powered Suggestions",
        description: "Receive smart recommendations.",
    },
];

const Features = () => {
    const titleRef = useRef(null);
    const cardsRef = useRef([]);

    useGSAP(() => {
        if (titleRef.current) {
            let split = new SplitText(titleRef.current, { type: "lines" });
            gsap.from(split.lines, {
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    scrub: 2
                },
                duration: 1,
                yPercent: 100,
                opacity: 0,
                stagger: 0.1,
                ease: "expo.out",
            });
           
            gsap.to(titleRef.current, {
                backgroundPosition: '200% center',
                repeat: -1,
                duration: 3,
                ease: 'linear',
            });
        }
        gsap.from(cardsRef.current, {
            scrollTrigger: {
                trigger: cardsRef.current[0],
                start: "top 85%",
                end: "bottom 90%",
                scrub: 2
            },
            scale: 0.4,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out",
        });
    }, []);

    return (
        <section className="relative py-24 container mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
           
            <div className="absolute -top-24 -left-24 w-96 h-96 z-0 opacity-30 pointer-events-none">
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <ellipse cx="200" cy="200" rx="200" ry="200" fill="url(#paint0_radial)" />
                    <defs>
                        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(200 200) scale(200)" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#a5b4fc" />
                            <stop offset="1" stopColor="#f0abfc" stopOpacity="0.5" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
       
            <h2
                ref={titleRef}
                className="text-4xl features-text font-extrabold mb-14 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent inline-block" 
                style={{ backgroundSize: '200% 100%', backgroundPosition: '0% center', WebkitTextFillColor: 'rgba(49, 46, 129, 0.95)' }}
            >
                Powerful Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className="group bg-white/60 backdrop-blur-lg hover:bg-white/90 hover:shadow-2xl shadow-lg p-8 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 relative overflow-hidden"
                        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
                    >
                      
                        <span className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-400 group-hover:animate-border-shine pointer-events-none"></span>
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 via-purple-100 to-white text-blue-600 text-3xl shadow-md mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                            {feature.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                            {feature.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-2 px-2">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
           
            <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20 md:h-28">
                    <path fill="#f0f4ff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,122.7C1248,117,1344,75,1392,53.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default Features;
