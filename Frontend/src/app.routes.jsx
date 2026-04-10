import {createBrowserRouter} from "react-router"
import Login from "./feature/auth/pages/Login"
import Register from "./feature/auth/pages/Register"


export const router = createBrowserRouter([
    {
        path:"/",
        element:<h1>Home</h1>
    }, 
    {
        path:"/register",
        element:<Register />
    },
    {
        path:"/login",
        element:<Login />
    },

])