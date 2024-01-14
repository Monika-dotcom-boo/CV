import {
    createBrowserRouter,
} from "react-router-dom";
import Default from "../layouts/Default";
import Dashboard from "../pages/Dashboard";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Default />, 
        children:[
            {
                path: "/",
                element: <Dashboard />
            },
        ]
    },
]);

export default router