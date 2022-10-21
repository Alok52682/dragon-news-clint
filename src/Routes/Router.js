import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import Profile from "../Pages/Others/Profile/Profile";
import TermsAndConditions from "../Pages/Others/TermsAndConditions";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    children: [
        {
            path: '/',
            element: <Home />,
            loader: async () => fetch(`http://localhost:4000/news`)
        },
        {
            path: 'category/:id',
            element: <Category />,
            loader: async ({ params }) => fetch(`http://localhost:4000/category/${params.id}`)
        },
        {
            path: 'news/:id',
            element: <PrivateRoute><News /></PrivateRoute>,
            loader: async ({ params }) => fetch(`http://localhost:4000/news/${params.id}`)
        },
        {
            path: 'login',
            element: <Login />
        },
        {
            path: 'terms',
            element: <TermsAndConditions />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/profile',
            element: <PrivateRoute><Profile /></PrivateRoute>
        }
    ]
}])
