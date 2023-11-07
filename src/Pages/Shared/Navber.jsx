import { Link } from "react-router-dom";
import logoImg from '../../assets/logos.jpg'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
const Navber = () => {
    const {logOut, user} = useContext(AuthContext)


    const navItem = <>
    <li><Link className="text-md font-semibold" to='/'>Home</Link></li>
    <li><Link className="text-md font-semibold" to='/createAssaignment'>Create assignments</Link></li>
    <li><Link className="text-md font-semibold" to='/login'>Assignments</Link></li>
    <li><Link className="text-md font-semibold" to='/login'>Submitted Assignments</Link></li>
    <li><Link className="text-md font-semibold" to='/login'>My Assignments</Link></li>
    </>
    return (
        <div className="container mx-auto px-3">
            <div className="navbar bg-base-100 h-20 pb-2">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-md text-xl dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                 {navItem}
                </ul>
                </div>
                <Link to='/' className=" normal-case text-xl">
                    <img className="h-11" src={logoImg} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navItem}
                </ul>
            </div>
            <div className="navbar-end">
            {
                user?.email? 
                    <>
                        <button onClick={logOut} className="text-md font-semibold btn-primary text-white bg-gradient-to-r from-violet-500 to-violet-100 py-2 px-3 rounded-lg">LogOut</button> 
                        <>
                            {
                                user.photoURL?
                                <img className="h-10 rounded-full ml-2 border-2 border-violet-400" src={user.photoURL} alt="" />:
                                <img className="h-10 rounded-full ml-2 border-2 border-violet-400" src="https://i.ibb.co/JrpCtmk/humanlogo.jpg" alt="" />
                            }
                        </>
                    </>
                :
                    <Link to='/login' className="text-md font-semibold btn-primary text-white bg-gradient-to-r from-violet-500 to-violet-100 py-2 px-5 rounded-lg">Login</Link>
            }
            </div>
            </div>
        </div>
    );
};

export default Navber;