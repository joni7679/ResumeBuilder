import { MdOutlineDashboard } from "react-icons/md";
import { FaRegFileAlt, FaBriefcase, FaUser } from "react-icons/fa";
import { FaMarker } from "react-icons/fa6";

export const sidebarlinks = [
    {
        id: 1,
        name: "Dashboard",
        index: true,
        icon: MdOutlineDashboard,
    },
    {
        id: 2,
        name: "Resume Marker",
        path: "resume-Marker",
        icon: FaMarker,
    },
    {
        id: 3,
        name: "Resume",
        path: "resume",
        icon: FaRegFileAlt,
    },
    {
        id: 4,
        name: "Jobs",
        path: "jobs",
        icon: FaBriefcase,
    },
    {
        id: 5,
        name: "Profile",
        path: "profile",
        icon: FaUser,
    },
];
