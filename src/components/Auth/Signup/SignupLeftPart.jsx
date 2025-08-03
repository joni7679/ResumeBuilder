import React from 'react'

function SingupLeftpart() {

    return (
        <>
            <div className="signup-left-part relative w-full h-full lg:h-screen overflow-hidden">
                {/* <img
                    src="https://www.getsetresumes.com/storage/resume-examples/March2023/VbcK5LVA8jI0LvaXrc6X.jpg"
                    alt="Resume Example"
                    className="w-full h-full object-cover"
                /> */}

                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b overly flex items-center justify-center text-center px-6">

                    <div className="text-white z-10 space-y-6">
                        <h2 className="text-3xl lg:text-5xl font-extrabold leading-snug">
                            Craft a Resume <br /> That Gets You Noticed
                        </h2>
                        <p className="text-md lg:text-lg text-white/90 max-w-md mx-auto">
                            Our AI-powered resume builder helps you create job-winning resumes in minutes.
                        </p>

                       
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            <span className="bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
                                 Multiple Templates
                            </span>
                            <span className="bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
                                ⚡ Instant Download
                            </span>
                            <span className="bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
                                 Secure & Private
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SingupLeftpart