import React from 'react'
import heroimg from '../../assets/home.webp'
import { FaChartBar, FaCheckCircle } from 'react-icons/fa'

function RightPart() {
    return (
        <div className="relative w-full flex justify-center p-4 sm:p-6 md:p-8">
            <div className="bg-[#e6effc] w-full max-w-[30rem] h-auto aspect-[30/32] rounded-3xl shadow-xl relative ">
                <img
                    src={heroimg}
                    alt="Hero"
                    className="absolute top-1 w-full h-full object-contain"
                />
                <div className="absolute top-[10%] left-[-2rem] sm:top-[20%] sm:left-[-3rem] bg-white shadow-md px-3 py-1 sm:px-4 sm:py-2 rounded-xl flex items-center gap-2 sm:gap-3 transition-all duration-300">
                    <FaCheckCircle className="text-purple-600 text-base sm:text-xl" />
                    <div>
                        <p className="font-semibold text-blue-600 text-sm sm:text-base">Accurate results</p>
                        <p className="text-xs text-gray-400">Work faster 200%</p>
                    </div>
                </div>
                <div className="absolute bottom-[10%] right-[-2rem] sm:bottom-[10%] sm:right-[-3rem] bg-white shadow-md px-3 py-1 sm:px-4 sm:py-2 rounded-xl flex items-center gap-2 sm:gap-3 transition-all duration-300">
                    <FaChartBar className="text-indigo-600 text-base sm:text-xl" />
                    <div>
                        <p className="font-semibold text-blue-600 text-sm sm:text-base">Analytics</p>
                        <p className="text-xs text-gray-400">Real time report</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightPart