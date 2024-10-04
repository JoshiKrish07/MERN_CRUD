import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import ErrorElement from "../pages/ErrorElement";
import Home from "../pages/Home";
import Register from "../pages/Register";
import AllUsers from "../pages/AllUsers";

export const routes = createBrowserRouter([{
    path: '/',
    element: <Root />,
    errorElement: <ErrorElement />,
    children: [
        // {path: '/', element: <Home/>},
        {path: '/', element: <Register/>},
        {path: '/register', element: <Register/>},
        {path: '/allusers', element: <AllUsers/>},
        {path: '/user/:id', element: <Register/>},
    ]
}])