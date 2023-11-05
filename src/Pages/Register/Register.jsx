import { Link } from "react-router-dom";
import RegImg from '../../assets/login.jpg'

const Register = () => {
    return (
        <div>
            <div className="lg:mt-20 mt-7 container mx-auto flex justify-center lg:flex-row flex-col items-center">
            <div className="w-1/3">
                <img src={RegImg} alt="" />
            </div>
            <div className="hero-content flex-col">
                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 px-7">
                <h1 className="text-3xl font-bold mb-4 text-center pt-10">Please <span className="text-violet-600">Register now!</span></h1>
                <p className="text-center text-gray-400"> laborum cum iure temporibus rerum. Totam, repellat voluptatem.</p>
                <form className="card-body">
                    <div className="flex gap-5 lg:flex-row flex-col">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    </div>
                    <div className="flex gap-5 lg:flex-row flex-col">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary bg-gradient-to-r from-violet-500 to-violet-100 text-white border-none">Register</button>
                    </div>
                    <p className="text-center text-black py-6">Already have an account ? <Link to="/login" className="text-violet-600 font-bold">Please Login</Link></p>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Register;