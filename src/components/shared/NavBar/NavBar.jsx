import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/image/logo/Logo-new-1-removebg.png'
// import bgImage from '../../../assets/image/Background/bg-3.jpg'
import './navbar.css'
const NavBar = () => {
    return (
        <>
            {/* <div
             style={{ 
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top', }}>
                <div className="navbar container mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost text-[#5b608b] lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <nav className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#e7e7e9] rounded-box w-52">
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/addblog">About</NavLink>
                                    <NavLink to="/featureblog">Dashboard</NavLink>
                                    <NavLink to="/allblogs">Contact</NavLink>
                                </ul>
                            </nav>
                        </div>
                        <img className="w-24 lg:flex hidden" src={logo} alt="" />
                    </div>
                    <div className="navbar-end ">
                        <img className="w-20 flex lg:hidden" src={logo} alt="" />

                        <ul className="menu menu-horizontal items-center hidden lg:flex">
                            <nav className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/about">About</NavLink>
                                <NavLink to="/dashboard">Dashboard</NavLink>
                                <NavLink to="/contact">Contact</NavLink>
                            </nav>
                        </ul>

                    </div>
                </div>
            </div> */}
            <div>
                <div className="navbar container mx-auto ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost text-[#8C52FF] lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <nav className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[white] rounded-box w-52">
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/about">About</NavLink>
                                    <NavLink to="/dashboard">Dashboard</NavLink>
                                    <NavLink to="/contact">Contact</NavLink>
                                </ul>
                            </nav>
                        </div>
                        <img className="w-20" src={logo} alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal flex items-center">
                            <nav className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/about">About</NavLink>
                                <NavLink to="/dashboard">Dashboard</NavLink>
                                <NavLink to="/contact">Contact</NavLink>
                            </nav>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="flex gap-2 md:gap-5 items-center">
                            <Link to={'/signin'}>
                                <button className="px-2 md:px-6 lg:py-2 md:py-1 border-[#8C52FF]  border-r-2  bg-white md:text-xl text-sm text-black font-semibold">Sign in</button>
                            </Link>
                            <Link to={'/signup'}>
                                <button className="px-3 py-1 md:px-6 lg:py-2 md:py-1 border-black bg-[#8C52FF] text-white md:text-xl text-sm rounded-full">Sign up</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;