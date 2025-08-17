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
        }

        gsap.from(cardsRef.current, {
            scrollTrigger: {
                trigger: cardsRef.current[0],
                start: "top 85%",
                end: "bottom 90%",
                // markers: true,
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
        <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
                ref={titleRef}
                className="text-4xl features-text font-bold text-gray-100 mb-12"
            >
                Powerful Features
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className="group bg-[#FAFCFE] hover:bg-white hover:shadow-2xl shadow-md p-6 rounded-3xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                    >
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 text-blue-600 text-2xl shadow-sm mx-auto mb-4">
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
        </section>
    );
};

export default Features;
