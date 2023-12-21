import { useContext } from "react";
import { AuthContext } from './../../../../Providers/AuthProvider';
import { Link } from "react-router-dom";


const DashboardBanner = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
            {/* <div className="bg-[#8C52FF]">
                <div className="container mx-auto p-2">
                    <div className="flex justify-between items-center">
                        <div className="text-3xl font-bold">
                            <h1>Hello , {user.displayName}</h1>
                        </div>
                        <div className="dropdown dropdown-end text-black font-bold font-roboto">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-20 lg:w-36 border-black border-2 rounded-full">
                                    <img src={user.photoURL ? user.photoURL : ``} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li><a>{user.email}</a></li>
                                <li><a>{user.displayName}</a></li>
                                <Link className="ml-3" to={'/'}><a>Back To Home</a></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="bg-[#8C52FF]">
                <div className="container mx-auto p-2">
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <div className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-0">
                            <h1>Hello, {user.displayName}</h1>
                        </div>
                        <div className="dropdown dropdown-end text-black font-bold font-roboto">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-20 lg:w-36 border-black border-2 rounded-full">
                                    <img src={user.photoURL ? user.photoURL : ''} alt="User Avatar" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box lg:w-52">
                                <li><a>{user.email}</a></li>
                                <li><a>{user.displayName}</a></li>
                                <li><Link className="ml-3" to={'/'}><a>Back To Home</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default DashboardBanner;