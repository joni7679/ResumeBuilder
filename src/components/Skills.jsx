import React, { useState } from 'react'
import InputField from './InputField'
import { toast, ToastContainer } from 'react-toastify';

function Skills({ data, setFormData, errors }) {
    const [skillInput, setSkillInput] = useState("");

    const handleAddSkill = () => {
        if (!skillInput.trim()) return;
        if (data.includes(skillInput.trim())) {
            toast.warn("This skill is already added.", {
                position: "top-right",
                autoClose: 3000,
                theme: "light"
            });
            return true
        };

        setFormData(prev => ({
            ...prev,
            skills: [...prev.skills, skillInput.trim()]
        }));

        setSkillInput("");
    };

    const handleKeydown = (e) => {
        if (e.key === "Enter") {
            handleAddSkill();
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="input-field-wrapper info">
                <InputField
                    type="text"
                    placeholder="Add a skill..."
                    name="skills"
                    label="Skill"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyDown={handleKeydown}
                />

                {errors.skills && <p className="text-sm text-red-600">{errors.skills}</p>}

                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md shadow cursor-pointer mt-3"
                    onClick={handleAddSkill}>
                    Add Skill
                </button>
            </div >


            {
                data.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                        {data.map((skill, idx) => (
                            <li
                                key={idx}
                                className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-800"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                )
            }
        </>
    );
}

export default Skills;
