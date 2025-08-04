import React, { useEffect, useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'

function AboutMe({ data }) {
    const [summary, setSummary] = useState(null);

    useEffect(() => {
        if (data) {
            setSummary(data);
        }
    }, [data]);

    if (!summary || !summary.personalinfo) {
        return <div className="text-center text-gray-500 p-4"></div>;
    }

    const { personalinfo } = summary;
    return (
        <section className="bg-white p-6 rounded-md shadow-md w-full  mx-w-md mx-auto mt-10">
            <div className="flex items-center justify-between mb-2 border-b-2 border-gray-300 py-2">
                <div className='flex items-center justify-center gap-3'>
                    <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
                    <FaPencilAlt className='cursor-pointer' />
                </div>
                <span className="text-xs bg-red-100 text-red-500 px-2 py-0.5 rounded-full font-medium">1 Urgent</span>
            </div>
            <p className="text-gray-700">
                {personalinfo?.summary || "N/A"}
            </p>
        </section>
    )
}

export default AboutMe