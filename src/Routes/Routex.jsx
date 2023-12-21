import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import Home from "../components/page/Home/Home";
import DashboardHome from "../components/page/Dashboard/DashboardHome/DashboardHome";
import SignIn from "../components/page/SignIn/SignIn";
import SignUp from "../components/page/SignUp/SignUp";
import ErrorPage from './../components/page/ErrorPage/ErrorPage';
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element:<Home></Home>,
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'dashboard',
                element: <PrivateRoutes><DashboardHome></DashboardHome></PrivateRoutes>
            },
            
        ],
    },
]);

export default router