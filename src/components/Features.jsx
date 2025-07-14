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
        <section className="py-16 info px-6 sm:px-8 md:px-12 lg:px-16 bg-white text-center">
            <h2 className="text-3xl font-bold mb-12">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {features.map((feature, index) => (
                    <div key={index} className="flex  bg-[#FAFCFE] shadow-lg p-5 rounded-3xl h-48 justify-center flex-col items-center max-w-sm  text-center">
                        {feature.icon}
                        <h3 className="text-lg font-semibold mt-4 mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
