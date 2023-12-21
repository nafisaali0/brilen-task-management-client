import { useContext } from "react";
import { AuthContext } from './../../../../Providers/AuthProvider';


const DashboardBanner = () => {
    const {user}=useContext(AuthContext)
    return (
        <>
            <div>
                 
            </div>
        </>
    );
};

export default DashboardBanner;