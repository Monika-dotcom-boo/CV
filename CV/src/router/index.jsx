import {
    createBrowserRouter,
} from "react-router-dom";
import Default from "../layouts/Default";
import Dashboard from "../pages/Dashboard";
import Home from "../componets/home/Home";
import Bio from "../componets/bio/Bio";
import Project from "../componets/projects/Projects";
import Contact  from "../componets/Contact/contact";
import Skille from "../componets/skille/Skille";
import About from "../componets/About/about";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Default />, 
        children:[
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/bio",
                element: <Bio />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/projects",
                element: <Project />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/skille",
                element: <Skille />
            },

        ]
    },
]);

export default router