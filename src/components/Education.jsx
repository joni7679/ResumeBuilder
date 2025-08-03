import React, { useState } from 'react'
import InputField from './InputField'
import { toast, ToastContainer } from 'react-toastify';
import { Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Education({ data, setFormData, errors }) {
    const [education, seteducation] = useState({
        collegename: "",
        stream: "",
        startdate: "",
        enddate: "",
        currentlyStudying: false
    });

    // Input change logic
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        seteducation((prev) => ({ ...prev, [name]: value }));
    };

    // Checkbox change logic
    const handleCheckboxChange = (e) => {
        const isChecked = e.target.checked;
        seteducation((prev) => ({
            ...prev,
            currentlyStudying: isChecked,
            enddate: isChecked ? "Present" : prev.enddate
        }));
    };

    const handleAdd = () => {
        const { collegename, stream, startdate, enddate, currentlyStudying } = education;

        if (!collegename || !stream || !startdate || (!currentlyStudying && !enddate)) {
            toast.error('All fields are required', {
                position: "top-right",
                autoClose: 5000,
                theme: "light",
                transition: Bounce,
            });
            return;
        }
        // push logic here
        setFormData((prev) => [...prev, education]);



        seteducation({
            collegename: "",
            stream: "",
            startdate: "",
            enddate: "",
            currentlyStudying: false
        });

        toast.success("Education added!", {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
            transition: Bounce,
        });
    };

    return (
        <>
            <InputField
                label="College Name"
                name="collegename"
                placeholder="Enter college name"
                value={education.collegename}
                onChange={handleInputChange}
            />
            <InputField
                label="Stream"
                name="stream"
                placeholder="Enter Your Stream"
                value={education.stream}
                onChange={handleInputChange}
            />
            <InputField
                label="Start Date"
                name="startdate"
                type="date"
                value={education.startdate}
                onChange={handleInputChange}
            />
            <InputField
                label="End Date"
                name="enddate"
                type="date"
                value={education.enddate}
                onChange={handleInputChange}
                disabled={education.currentlyStudying}
            />


            <label className="flex items-center gap-2 mt-3">
                <input
                    type="checkbox"
                    checked={education.currentlyStudying}
                    onChange={handleCheckboxChange}
                />
                <span className="text-sm text-gray-700">Currently studying here</span>
            </label>


            {errors.education && <p className='text-red-600 text-sm mt-5'>{errors.education}</p>}

            <button
                onClick={handleAdd}
                type="button"
                className="w-full mt-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
                Add Education
            </button>

            <ToastContainer />
        </>
    );
}

export default Education;
