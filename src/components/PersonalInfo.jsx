import React, { useState } from 'react';
import InputField from './InputField';
import TextareaField from './TextareaField';
import { spellCheck } from '../utils/gemini';

function PersonalInfo({ data, setFormData, errors }) {
    const [correctedText, setCorrectedText] = useState("");
    const [loading, setLoading] = useState(false);
    const handleCheck = async () => {
        setLoading(true);
        try {
            let corrected = await spellCheck(data.summary);
            setCorrectedText(corrected);
            console.log(corrected);

            setFormData(prev => ({
                ...prev,
                personalinfo: {
                    ...prev.personalinfo,
                    summary: corrected
                }
            }));
        } catch (error) {
            console.error("Spell check failed:", error);
        } finally {
            setLoading(false);
        }
    };


    // oninputchange
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            personalinfo: {
                ...prev.personalinfo,
                [name]: value
            }
        }));
    };



    return (
        <>


            <h1 className='text-center text-2xl text-black font-bold mb-4'>Personal Info</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">

                <InputField type='text' name="fullName" label="Full Name" placeholder="Enter Your Full Name" value={data.fullName}
                    onChange={handleInputChange}
                    error={errors.fullName}
                />


                <InputField type='text' name="jobtitle" label="Jobtitle" placeholder="Enter Your Job Title Here..."
                    value={data.jobtitle}
                    onChange={handleInputChange}
                    error={errors.jobtitle}
                />

                <InputField type='text' name="email" label="Email" placeholder="Enter Your Email Address"
                    value={data.email}
                    onChange={handleInputChange}
                    error={errors.email}
                />

                <InputField type='text' name="phone" label="Phone Number" placeholder="Enter Your Phone Number"
                    value={data.phone}
                    onChange={handleInputChange}
                    error={errors.phone}
                />

                <InputField type="date" name="dob" label="Enter Your Date of Birth"
                    value={data.dob}
                    onChange={handleInputChange}
                    error={errors.dob}
                />
                <InputField type='text' name="address" label="Enter Your Full Address"
                    placeholder="Enter Your Full Address"
                    value={data.address}
                    onChange={handleInputChange}
                    error={errors.address}

                />

                <InputField type='text' name="linkedin" label="Enter Your LinkedIn URL"
                    placeholder="Enter Your LinkedIn URL....."
                    value={data.linkedin}
                    onChange={handleInputChange}
                    error={errors.linkedin}

                />
                <InputField type='text' name="github" label="Enter Your GitHub URL"
                    placeholder="Enter Your GitHub URL....."
                    value={data.github}
                    onChange={handleInputChange}
                    error={errors.github}

                />
                <InputField type='text' name="portfolio" label="Enter Your Portfolio URL"
                    placeholder="Enter Your Portfolio URL....."
                    value={data.portfolio}
                    onChange={handleInputChange}
                    error={errors.portfolio}

                />
                <div>
                    <TextareaField name='summary' label="Professional Summary" placeholder="A brief summary of your professional background and goals"
                        value={data.summary}
                        onChange={handleInputChange}
                        error={errors.summary}

                    />
                    <button onClick={handleCheck} disabled={loading} className={`mt-3 cursor-pointer px-4 py-2 rounded-md transition-all ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
                    >
                        {loading ? "Checking Spelling..." : "Check Spelling"}
                    </button>
                </div>


            </div>



        </>
    );
}

export default PersonalInfo;
