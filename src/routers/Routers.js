import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../pages/Category/Category";
import Courses from "../pages/Courses/Courses";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://learning-platform-server-omega.vercel.app/courses')
            },
            {
                path: "/courses",
                element: <Home></Home>,
                loader: () => fetch('https://learning-platform-server-omega.vercel.app/courses')
            },
            {
                path: "/courses-categories/:id",
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://learning-platform-server-omega.vercel.app/courses-categories/${params.id}`)
            },
        ]
    }
]);