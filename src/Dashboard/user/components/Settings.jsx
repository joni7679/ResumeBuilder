import React from 'react'
import { Link } from 'react-router-dom'

function Settings() {
    return (
        <>
            <div className="settings bg-gray-800">
                <div className='card shadow-md max-w-md w-full'>
                    <div className="card-body">
                        <h2 className="text-lg font-bold mb-4">Settings</h2>
                        <Link to={`/dashboard/resetpassword`} className="flex flex-wrap -mx-3 mb-6">Reset Password</Link>
                        
                    </div>

                </div>
            </div>
        </>
    )
}

export default Settings