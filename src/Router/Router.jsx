import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../components/Login";
import Singup from "../components/Signup/Singup";
import Error404 from "../components/Error404";
import MainContent from "../Dashboard/user/components/MainContent";
import Home from "../Dashboard/user/Pages/Home";
import Resume from "../Dashboard/user/Pages/Resume";
import ProtectedRoute from "../components/ProtectedRoute";
import PubliceRoute from "../components/PubliceRoute";
import PublicRoute from "../components/PubliceRoute";
import ResumeMarker from "../Dashboard/user/Pages/ResumeMarker";

export let router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/about",
        element: <h1>about page</h1>
    },
    {
        path: "/features",
        element: <h1>features</h1>
    },
    {
        path: "/pricing",
        element: <h1>princing...</h1>
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
            <PublicRoute>
                <Login />
            </PublicRoute>
        )
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
                element: <h1>profile</h1>
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
                element: <h1>settings</h1>
            },
            {
                path: "jobs",
                element: <h1>jobs</h1>
            },
            {
                path: "404",
                element: <Error404 />
            }

        ]
    },

    {
        path: "*",
        element: <Error404 />
    },
])