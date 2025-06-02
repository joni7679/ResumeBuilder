import React from 'react';
import InputField from './InputField';

function PersonalInfo({ data, setData }) {
    const handlechangeInput = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    console.log("data", data);

    return (
        <div className='w-full rounded-2xl shadow-2xl p-4'>
            <h1 className='text-center text-2xl font-bold mb-4'>Personal Info</h1>
            <form>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <InputField type='text' name="fullName" label="Enter Your Full Name" value={data.fullName} onChange={handlechangeInput} />
                    <InputField type='text' name="email" label="Enter Your Email Address" value={data.email} onChange={handlechangeInput} />
                    <InputField type='text' name="phone" label="Enter Your Phone Number" value={data.phone} onChange={handlechangeInput} />
                    <InputField type="date" name="dob" label="Enter Your Date of Birth" value={data.dob} onChange={handlechangeInput} />
                    <InputField type='text' name="address" label="Enter Your Full Address" value={data.fullName} onChange={handlechangeInput} />
                    <InputField type='text' name="linkedin" label="Enter Your LinkedIn URL" value={data.fullName} onChange={handlechangeInput} />
                    <InputField type='text' name="github" label="Enter Your GitHub URL" value={data.fullName} onChange={handlechangeInput} />
                    <InputField type='text' name="portfolio" label="Enter Your Portfolio URL" value={data.fullName} onChange={handlechangeInput} />
                </div>
            </form>
        </div>
    );
}

export default PersonalInfo;
