import React from 'react';
import { CgLayoutGrid } from 'react-icons/cg';
import { FiFileText } from 'react-icons/fi';
import { GiLightBulb } from 'react-icons/gi';
import { LuMousePointerClick } from 'react-icons/lu';

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
    return (
        <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-100 mb-12">
                 Powerful Features
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {features.map((feature, index) => (
                    <div
                        key={index}
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
