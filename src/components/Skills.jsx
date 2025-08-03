import React from 'react'
import InputField from './InputField'

function Skills({ data, setFormData, errors }) {
    return (
        <>
            <div class="input-field-wrapper info">
                <InputField type="text"
                    placeholder="Add a skill..."
                    name="skills"
                    label="Skill " />
                {errors.Skills && <p className='text-sm text-red-600'>{errors.Skills}</p>}
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md shadow cursor-pointer" >Add Skill</button>
            </div>


        </>
    )
}

export default Skills