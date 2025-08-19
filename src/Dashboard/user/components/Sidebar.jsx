import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase/Firebase';
import { AuthContext } from '../../../Context/AuthContext';
import { sidebarlinks } from '../../../constants/sidebarlinks';
import { MdArrowBackIos } from 'react-icons/md';

const Sidebar = ({ open, setIsOpen }) => {
    const navigate = useNavigate();
    const { user, loading, error } = useContext(AuthContext);
    const [active, setActive] = useState(0);

    const logOut = async () => {
        try {

            await signOut(auth);
            toast.success("Logged out successfully");
            setTimeout(() => {
                navigate(`/`);
            }, 1000);
        } catch (error) {
            toast.error("Logout failed!");
            console.error("Logout error:", error);
        }
    };
    const backToHome = () => {
        history.back()
    };

    // ṭoggle logic here
    const toggleSidebar = (e) => {
        setIsOpen(!open)
    }

    return (
        <>

            <aside className=" h-screen sidebar-container bg-[#FAFCFE] shadow-lg p-4 relative overflow-scroll">
                <MdArrowBackIos onClick={toggleSidebar} className='text-xl cursor-pointer absolute right-[-4%] top-1/2' />
                <div className="flex items-center gap-2 mb-10">
                    <div className="bg-blue-100 p-2 rounded-full">
                        <div className="w-6 h-6 bg-gradient-to-tr from-blue-500 to-blue-700 rounded-full" />
                    </div>
                    <span className="text-xl font-bold text-black capitalize">resume.bulider</span>
                </div>
                {loading ? (
                    <div className="mb-10 text-gray-400">Loading user...</div>
                ) : user ? (
                    <div className="mb-10">
                        <div className="w-14 h-14 bg-red-900 rounded-full"></div>
                        <div className="text-sm font-semibold text-gray-900">
                            {user.displayName || "User"}
                        </div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                ) : (
                    <div className="mb-10 text-red-500">No user found</div>
                )}
                {sidebarlinks.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div key={item.id} className="grid grid-cols-1">
                            <Link
                                to={item.path}
                                onClick={() => setActive(index)}
                                className={`mb-4 flex-shrink-0 w-[200px] px-4 py-3 hover:bg-[#E5F0FF] p-3 rounded-md cursor-pointer ${active === index ? "bg-[#E5F0FF]" : ""}`}>
                                <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                                    {Icon && <Icon className='text-xl' />}
                                    {item.name}
                                </div>
                            </Link>
                        </div>
                    );
                })}
                <button
                    onClick={backToHome}
                    className="mt-10 cursor-pointer w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                    Back To Home
                </button>
                <button
                    onClick={logOut}
                    className="mt-10 cursor-pointer w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200">
                    Log Out
                </button>
            </aside>
        </>
    );
};

export default Sidebar;
