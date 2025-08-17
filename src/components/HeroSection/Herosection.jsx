import React from 'react'
import LeftPart from './LeftPart'
import RightPart from './RightPart'

function Herosection() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center overflow-hidden">
                {/* SVG Wave at the bottom for modern look */}
                <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
                    <svg viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24 md:h-32">
                        <path fill="#e6effc" fillOpacity="1" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,122.7C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-around">
                    <LeftPart />
                    <RightPart />
                </div>
            </section>
        </>
    )
}

export default Herosection