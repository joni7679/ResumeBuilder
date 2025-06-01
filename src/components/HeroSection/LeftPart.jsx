import React from 'react'

function LeftPart() {
    return (
        <>
            <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Build Your Professional Resume
                </h1>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    Create a standout resume in minutes with our easy-to-use resume builder.
                    <br />
                    Choose from multiple templates and download your resume as a PDF.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow cursor-pointer">
                    Build Your Resume Now
                </button>
            </div>
        </>
    )
}

export default LeftPart