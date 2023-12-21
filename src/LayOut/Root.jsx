import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/shared/NavBar/NavBar";
import Footer from "../components/shared/Footer/Footer";



const Root = () => {
    const location = useLocation()
    const nosubHeader = location.pathname.includes('dashboard')

    return (
        <>
            {nosubHeader || <NavBar></NavBar>}
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;