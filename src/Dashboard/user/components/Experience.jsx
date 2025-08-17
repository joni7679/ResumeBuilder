import React from 'react'
import { FaPencilAlt } from 'react-icons/fa'

function Experience({ data }) {
    return (
        <>
            <section className="bg-white p-6 rounded-md shadow-md w-full  mx-w-md mx-auto mt-10">
                <div className="flex items-center justify-between mb-2 border-b-2 border-gray-300 py-2">
                    <div className='flex items-center justify-center gap-3'>
                        <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
                        <FaPencilAlt className='cursor-pointer' />
                    </div>
                    <span className="text-xs bg-red-100 text-red-500 px-2 py-0.5 rounded-full font-medium">1 Urgent</span>
                </div>
                <p className="text-gray-700">
                    {
                        data.length > 0 ? (
                            data.map((item, index) => (
                                <div key={index} className="mb-4">
                                    <h3 className="text-lg font-bold text-gray-900">{item.role}</h3>
                                    <p className="text-gray-700">{item.description}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-700">No experience found</p>
                        )
                    }
                </p>
            </section>
        </>
    )
}

export default Experience