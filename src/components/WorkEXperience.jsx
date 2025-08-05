import React, { useState } from 'react';
import InputField from './InputField';
import TextareaField from './TextareaField';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function WorkEXperience({ handleSkipExperience, data, setFormData }) {
  const [currentExperience, setCurrentExperience] = useState({
    role: "",
    companyname: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
    currentlyWorking: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentExperience((prev) => ({ ...prev, [name]: value }));
  };

  // Checkbox change logic
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setCurrentExperience((prev) => ({
      ...prev,
      currentlyWorking: isChecked,
      endDate: isChecked ? "Present" : ""
    }));
  };

  const validate = () => {
    const { role, companyname, location, startDate } = currentExperience;

    if (!role) {
      toast.error('Please enter your Job Role');
      return false;
    }
    if (!companyname) {
      toast.error('Please enter the Company Name');
      return false;
    }
    if (!location) {
      toast.error('Please enter the Location');
      return false;
    }
    if (!startDate) {
      toast.error('Please enter the Start Date');
      return false;
    }

    return true;
  };
  const handleAdd = () => {
    let isValid = validate()
    if (!isValid) return

    // newexperience obj create
    const newExperience = {
      role: currentExperience.role,
      companyname: currentExperience.companyname,
      location: currentExperience.location,
      startDate: currentExperience.startDate,
      endDate: currentExperience.endDate,
      description: currentExperience.description,
      currentlyWorking: currentExperience.currentlyWorking
    }


    setFormData(prev => ({
      ...prev,
      experience: [...prev.experience, newExperience]
    }));

    setCurrentExperience({
      role: "",
      companyname: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
      currentlyWorking: false
    });

    toast.success("Experience added successfully!");
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Work Experience / Internship</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <InputField label="Job Role / Internship" name="role" placeholder="e.g. Frontend Developer" value={currentExperience.role} onChange={handleInputChange} />
        <InputField label="Company Name" name="companyname" placeholder="e.g. Google" value={currentExperience.companyname} onChange={handleInputChange} />
        <InputField label="Location" name="location" placeholder="e.g. Remote / Bangalore" value={currentExperience.location} onChange={handleInputChange} />

        <div>

          <InputField label="Start Date" name="startDate" type="date" value={currentExperience.startDate} onChange={handleInputChange} />

          <label className="flex items-center gap-2 mt-3">
            <input
              type="checkbox"
              checked={currentExperience.currentlyWorking}
              onChange={handleCheckboxChange}
            />
            <span className="text-sm text-gray-700">Currently Working...</span>
          </label>
        </div>

        <InputField
          label="End Date"
          name="endDate"
          type="date"
          value={currentExperience.endDate}
          disabled={currentExperience.currentlyWorking}
          onChange={handleInputChange}
        />
      </div>

      <TextareaField
        name="description"
        placeholder="Describe your responsibilities or achievements"
        value={currentExperience.description}
        onChange={handleInputChange}
      />

      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Experience
        </button>
        <button
          onClick={handleSkipExperience}
          className="text-sm bg-gray-500 py-2 px-4 rounded-md text-white cursor-pointer hover:bg-gray-600"
        >
          Skip / Next
        </button>

      </div>
      <div>
        {data.length > 0 && (
          <div className="mt-8 p-6 bg-white w-full  rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">Your Experience</h3>
            <div className="space-y-6">
              {data.map((exp, index) => (
                <div key={exp.id} className="p-4 border border-gray-200 rounded-lg relative">
                  <button
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold"
                    title="Remove Experience">

                  </button>
                  <h4 className="font-semibold text-lg text-blue-700">{exp.role}</h4>
                  <p className="text-md font-medium text-gray-600">{exp.companyname} - {exp.location}</p>
                  <p className="text-sm text-gray-500">{exp.startDate} to {exp.endDate}</p>
                  {exp.description && <p className="mt-2 text-gray-700 whitespace-pre-wrap">{exp.description}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default WorkEXperience;