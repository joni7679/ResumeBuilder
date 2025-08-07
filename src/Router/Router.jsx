import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error404 from "../components/Error404";
import MainContent from "../Dashboard/user/components/MainContent";
import Home from "../Dashboard/user/Pages/Home";
import Resume from "../Dashboard/user/Pages/Resume";
import ProtectedRoute from "../components/ProtectedRoute";
import PubliceRoute from "../components/PubliceRoute";
import PublicRoute from "../components/PubliceRoute";
import ResumeMarker from "../Dashboard/user/Pages/ResumeMarker";
import Singup from "../components/Auth/Signup/Singup";
import Login from "../components/Auth/Login";
import ForgetPassword from "../components/Auth/ForgetPassword";
import Profile from "../Dashboard/user/components/Profile";
import Settings from "../Dashboard/user/components/Settings";
import ResetPassword from "../Dashboard/user/components/Auth/ResetPassword";
import PdfViewer from '../Dashboard/user/Pages/PdfView';

export let router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/signup",
        element: (
            <PublicRoute>
                <Singup />
            </PublicRoute>
        )
    },
    {
        path: "/login",
        element: (
            <PubliceRoute>
                <Login />
            </PubliceRoute>
        )
    },
    {
        path: "/forgetpassword",
        element: <ForgetPassword />
    },
    {
        path: "dashboard",
        element: (
            <ProtectedRoute>
                <MainContent />
            </ProtectedRoute>

        ),
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "resume-Marker",
                element: <ResumeMarker />
            },
            {
                path: "resume",
                element: <Resume />
            },
            {
                path: "settings",
                element: <Settings />
            },
            {
                path: "jobs",
                element: <h1>jobs</h1>
            },
            {
                path: "resetpassword",
                element: <ResetPassword />
            },
            {
                path: "404",
                element: <Error404 />
            }, {
                path: "pdfviwer",
                element: <PdfViewer />
            }
        ]
    },

    {
        path: "*",
        element: <Error404 />
    },
])