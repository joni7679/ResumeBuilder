import React, { useState } from 'react';
import InputField from './InputField';
import TextareaField from './TextareaField';
import { spellCheck } from '../utils/gemini';

function PersonalInfo({ data, setFormData }) {
    const [correctedText, setCorrectedText] = useState("");
    const [loading, setLoading] = useState(false);
    const handleCheck = async () => {
        setLoading(true);
        try {
            let correctedText = await spellCheck(data.summary);
            setCorrectedText(correctedText);
            setLoading(false)
        } catch (error) {
            console.error("Spell check failed:", error);
        } finally {
            setLoading(false);
        }
    };

    // oninputchange
    const handleInputChange = (event) => {

    }



    return (
        <div className='w-full rounded-2xl shadow-2xl p-4 info'>
            <h1 className='text-center text-2xl text-black font-bold mb-4'>Personal Info</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <InputField type='text' name="fullName" label="Full Name" placeholder="Enter Your Full Name" value={data.fullName}
                    onChange={handleInputChange} />
                <InputField type='text' name="email" label="Email" placeholder="Enter Your Email Address"
                    value={data.email}
                    onChange={handleInputChange} />
                <InputField type='text' name="phone" label="Phone Number" placeholder="Enter Your Phone Number"
                    value={data.phone}
                    onChange={handleInputChange}
                />
                <InputField type="date" name="dob" label="Enter Your Date of Birth"
                    value={data.dob}
                    onChange={handleInputChange}

                />
                <InputField type='text' name="address" label="Enter Your Full Address"
                    placeholder="Enter Your Full Address"

                    value={data.address}
                    onChange={handleInputChange}

                />
                <InputField type='text' name="linkedin" label="Enter Your LinkedIn URL"
                    placeholder="Enter Your LinkedIn URL....."
                    value={data.linkedin}
                    onChange={handleInputChange}

                />
                <InputField type='text' name="github" label="Enter Your GitHub URL"
                    placeholder="Enter Your GitHub URL....."
                    value={data.github}
                    onChange={handleInputChange}

                />
                <InputField type='text' name="portfolio" label="Enter Your Portfolio URL"
                    placeholder="Enter Your Portfolio URL....."
                    value={data.portfolio}
                    onChange={handleInputChange}

                />
                <TextareaField name='summary' label="Professional Summary" placeholder="A brief summary of your professional background and goals"

                    value={data.summary}
                    onChange={handleInputChange}

                />

            </div>
            <button
                className="mt-3 cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all">
                {
                    loading ? "Check Spelling...." : " Check Spelling"
                }

            </button>
        </div>
    );
}

export default PersonalInfo;
