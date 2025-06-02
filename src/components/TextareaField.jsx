import React from "react";

const TextareaField = ({ label, name, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col mb-4 w-full max-w-lg">
      {label && (
        <label
          htmlFor={name}
          className="mb-2 text-gray-700 font-semibold select-none"
        >
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        className="resize-y p-3 text-base border-2 border-gray-300 rounded-md 
                   focus:outline-none focus:border-blue-600 focus:ring-2 
                   focus:ring-blue-300 placeholder-gray-400 bg-white text-gray-900
                   min-h-[120px]"
        value={value}
        onChange={onChange}
        rows={5}
      />
    </div>
  );
};

export default TextareaField;
