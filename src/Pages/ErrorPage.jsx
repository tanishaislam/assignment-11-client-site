import { Link } from "react-router-dom";
import errorimg from '../assets/concept-404-2.jpg'
const ErrorPage = () => {
    return (
        <div className="h-[80vh] flex items-center justify-center">
            <div className="text-center mt-28 ">
                <div className="flex justify-center h-[40vh]">
                <img src={errorimg} alt="" />
                </div>
                <p className=" text-xl text-violet-600 font-semibold pb-4">Page not found</p>
                <p className=" text-md text-zinc-400 font-semibold pb-5">The page you are looking for does not exiest <br /> or an other error occurred</p>
                <Link to='/' className="border-violet-500 text-violet-600 font-semibold rounded-lg btn-outline btn">Go Back Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;