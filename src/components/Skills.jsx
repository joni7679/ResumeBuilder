import React from 'react'
import InputField from './InputField'

function Skills() {
    return (
        <>
            <div class="input-field-wrapper">
                <InputField type="text"
                    placeholder="Add a skill..."
                    class="input-field"
                    aria-label="Skill input" />
                <button class="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md shadow cursor-pointer" aria-label="Add skill">Add Skill</button>
            </div>


        </>
    )
}

export default Skills