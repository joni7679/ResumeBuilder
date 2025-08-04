import React, { useEffect, useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'

function Education({ data }) {
    const [education, seteducation] = useState([]);

    useEffect(() => {
        if (data) {
            seteducation(data);
            console.log(education);
        }
    }, [data]);



    return (
        <>
            <section className="bg-white p-6 rounded-md shadow-md w-full  mx-w-md mx-auto mt-10">
                <div className="flex items-center justify-between mb-2 border-b-2 border-gray-300 py-2">
                    <div className='flex items-center justify-center gap-3'>
                        <h2 className="text-2xl font-bold text-gray-900">Education</h2>
                        <FaPencilAlt className='cursor-pointer' />
                    </div>

                    <span className="text-xs bg-red-100 text-red-500 px-2 py-0.5 rounded-full font-medium">1 Urgent</span>
                </div>
                <p className="text-gray-700">
                    {
                        data.education.length > 0 &&
                        data.education.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h3 className="text-lg font-bold text-gray-900 capitalize">{item?.collegename || 'N/A'}</h3>
                                    <p className="text-gray-700">{item?.stream || "N/A"}</p>
                                    <div className='flex items-center gap-2'>
                                        <p>{item?.startdate}</p>
                                        <p>{item?.enddate}</p>
                                    </div>

                                </div>
                            )
                        })
                    }
                </p>
            </section>
        </>
    )
}

export default Education