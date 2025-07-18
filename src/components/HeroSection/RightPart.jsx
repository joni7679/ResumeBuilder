import React from 'react'
import heroimg from '../../assets/home.webp'
import { FaChartBar, FaCheckCircle } from 'react-icons/fa'

function RightPart() {
    return (
        <>
            <div className="relative w-full flex justify-center">

                <div className="bg-[#e6effc] w-[30rem] h-[32rem] rounded-3xl shadow-xl relative ">
                    <img
                        src={heroimg}
                        alt="Hero"
                        className="absolute top-[7px] w-[30rem] object-contain"
                    />

                    <div className="absolute top-[20%] left-[-3rem] bg-white shadow-md px-4 py-2 rounded-xl flex items-center gap-3">
                        <FaCheckCircle className="text-purple-600 text-xl" />
                        <div>
                            <p className="font-semibold text-blue-600">Accurate results</p>
                            <p className="text-sm text-gray-400">Work faster 200%</p>
                        </div>
                    </div>

                    <div className="absolute bottom-[10%] right-[-3rem] bg-white shadow-md px-4 py-2 rounded-xl flex items-center gap-3">
                        <FaChartBar className="text-indigo-600 text-xl" />
                        <div>
                            <p className="font-semibold text-blue-600">Analytics</p>
                            <p className="text-sm text-gray-400">Real time report</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightPart