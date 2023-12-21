import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import Home from "../components/page/Home/Home";
import DashboardHome from "../components/page/Dashboard/DashboardHome/DashboardHome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element:<Home></Home>,
            },
            // {
            //     path: '/signin',
            //     element: <SignIn></SignIn>
            // },
            // {
            //     path: '/signup',
            //     element: <SignUp></SignUp>
            // },
            {
                path: 'dashboard',
                element: <DashboardHome></DashboardHome>
            },
            
        ],
    },
]);

export default router