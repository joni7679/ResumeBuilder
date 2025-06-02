import React from 'react'
import InputField from './InputField'

function Education({data,setData}) {
    return (
        <>

            <form  className=" mx-auto p-4 border rounded shadow-md">
                <InputField
                    label="College Name"
                    name="college"
                    placeholder="Enter college name"
                />
                <InputField
                    label="Stream"
                    name="Stream"
                    placeholder="Enter Your Stream"
                />
                
                <InputField
                    label="Start Date"
                    name="startDate"
                    type="date"
                    
                />
                <InputField
                    label="End Date"
                    name="endDate"
                    type="date"
                    
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Add Education
                </button>
            </form>



        </>
    )
}

export default Education