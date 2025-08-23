import React, { useRef } from 'react'
import heroimg from '../../assets/home.webp'
import { FaChartBar, FaCheckCircle } from 'react-icons/fa'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

function RightPart() {
    const heroImg = useRef();
    const imgContainer = useRef();
    const accurateDiv = useRef();
    const analytics = useRef();
    useGSAP(() => {
        let tl = gsap.timeline()
        tl.from(heroImg.current, {
            duration: 1.8,
            scale: 0.6,
            stagger: 0.05,
            ease: "expo.out",
            opacity: 0
        }),
            tl.to(imgContainer.current, {
                duration: 1.8,
                height: "100%",
                objectPosition: "bottom",
                ease: "expo.out",
            }, "a"),
            tl.from(accurateDiv.current, {
                scaleY: 0.8,
                duration: 0.7,
                opacity: 0
            }, "a+=0.1"),
            tl.from(analytics.current, {
                scaleY: 0.8,
                duration: 0.7,
                opacity: 0
            }, "a+=0.1")

    })
    return (
        <>
            <div className="relative w-full flex justify-center p-4 sm:p-6 md:p-8">
                <div className="absolute -top-10 -right-10 w-60 h-60 bg-gradient-to-br from-blue-200 via-purple-100 to-white rounded-full blur-3xl opacity-60 z-0 animate-pulse-slow"></div>
                <div className="bg-[#e6effc] w-full max-w-[30rem] h-auto aspect-[30/32] rounded-3xl shadow-2xl relative  z-10">
                    <div ref={imgContainer} className='absolute w-full h-0  rounded-3xl'>
                        <img ref={heroImg} src={heroimg} alt="hero section img" className="absolute  top-0 w-full h-full object-cover drop-shadow-2xl transition-transform duration-700" />
                        <div ref={accurateDiv} className="absolute top-[10%] left-[-2rem] sm:top-[20%] sm:left-[-3rem] bg-white/80 backdrop-blur-md shadow-lg px-4 py-2 rounded-2xl flex items-center gap-3 animate-fade-in-up border border-blue-100">
                            <FaCheckCircle className="text-purple-600 text-xl" />
                            <div>
                                <p className="font-semibold text-blue-600 text-base">Accurate results</p>
                                <p className="text-xs text-gray-400">Work faster 200%</p>
                            </div>
                        </div>
                        <div ref={analytics} className="absolute bottom-[10%] right-[-2rem] sm:bottom-[10%] sm:right-[-3rem] bg-white/80 backdrop-blur-md shadow-lg px-4 py-2 rounded-2xl flex items-center gap-3 animate-fade-in-up border border-indigo-100">
                            <FaChartBar className="text-indigo-600 text-xl" />
                            <div>
                                <p className="font-semibold text-blue-600 text-base">Analytics</p>
                                <p className="text-xs text-gray-400">Real time report</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default RightPart