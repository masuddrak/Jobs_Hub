import { Link, NavLink } from "react-router-dom";


const Header = () => {
    const nav = <>
        <NavLink to='/' className={({ isActive }) =>
            isActive ? "border-1 text-green-600" : isActive ? "active" : ""
        }>Home</NavLink>
        <NavLink to='/applied' className={({ isActive }) =>
            isActive ? "border-1 text-green-600" : isActive ? "active" : ""
        }>Applied Jobs</NavLink>
        <NavLink to='/statistics' className={({ isActive }) =>
            isActive ? "border-1 text-green-600" : isActive ? "active" : ""
        }>Statistics</NavLink>


    </>
    return (
        <div className="bg-base-100 shadow-lg">
            <div className="navbar  container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {nav}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-2xl font-bold">CareerHub</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl font-bold gap-5">
                        {nav}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a rel="noopener noreferrer" href="fechers" className="px-8 py-3 text-lg font-semibold border rounded border-green-600">Star Applying</a>
                </div>
            </div>
        </div>
    );
};

export default Header;