import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../pages/Category/Category";
import Checkout from "../pages/Courses/Checkout";
import CoursesDetails from "../pages/Courses/CoursesDetails";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import Blog from "../pages/Other/Blog";
import ErrorPage from "../pages/Other/ErrorPage";
import FAQ from "../pages/Other/FAQ";
import TermsAndConditions from "../pages/Other/TermsAndConditions";
import PrivateRouter from "./PrivateRouter";

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
                path: "/courses/:id",
                element: <CoursesDetails></CoursesDetails>,
                loader: ({ params }) => fetch(`https://learning-platform-server-omega.vercel.app/courses/${params.id}`)
            },
            {
                path: "/checkout/:id",
                element: <PrivateRouter><Checkout></Checkout></PrivateRouter>,
                loader: ({ params }) => fetch(`https://learning-platform-server-omega.vercel.app/courses/${params.id}`)
            },
            {
                path: "/courses-categories/:id",
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://learning-platform-server-omega.vercel.app/courses-categories/${params.id}`)
                // loader: ({ params }) => fetch(`https://learning-platform-server-omega.vercel.app/courses/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <SignUp></SignUp>
            },
            {
                path: "/terms",
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: "/faq",
                element: <FAQ></FAQ>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            },
        ]
    }
]);