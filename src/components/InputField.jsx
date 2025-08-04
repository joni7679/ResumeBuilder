import React from 'react';

function InputField({ label, type = "text", value, name, onChange, placeholder, error, onKeyDown }) {
    return (
        <div className="w-full mb-4">
            {label && (
                <label
                    htmlFor={name}
                    className="block text-sm font-medium text-gray-700 mb-2"
                >
                    {label}
                </label>
            )}

            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                onKeyDown={onKeyDown}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800 transition"
            />

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

        </div>

    );
}

export default InputField;
