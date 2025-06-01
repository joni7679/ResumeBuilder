import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Login from "../components/Login";
import Singup from "../components/Signup/Singup";

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
        element: <Singup />
    },
    {
        path: "/login",
        element: <Login />
    }
])