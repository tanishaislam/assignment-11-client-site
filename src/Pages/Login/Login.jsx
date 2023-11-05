import { Link } from "react-router-dom";
import logImg from '../../assets/login.jpg'
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
    const {googleSignIn, loginUser} = useContext(AuthContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async(e) =>{
        e.preventDefault();
        try{
            await loginUser(email, password);
            console.log('The user is Logged In successfully')
        }
        catch (error){
            console.log(error)
        }
    }

    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)           
        })
    }

    return (
        <div>
            <div className="container mx-auto flex justify-center lg:flex-row flex-col items-center pt-10">
            <div className="w-1/2">
                <img src={logImg} alt="" />
            </div>
            <div className=" p-5">
                <div className="card  w-full shadow-2xl bg-base-100 px-7">
                <h1 className="text-3xl font-bold mb-4 text-center pt-10">Please <span className="text-violet-600">Login now!</span></h1>
                <p className="text-center text-gray-400"> Lorem ipsum dolor sit amet consectetur. <br /> repellat voluptatem.</p>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input 
                        type="email"
                        name="email" 
                        placeholder="email" 
                        className="input input-bordered" 
                        required 
                        onBlur={(e)=>setEmail(e.target.value)}
                     />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="password" 
                        className="input input-bordered" 
                        required
                        onBlur={(e)=>setPassword(e.target.value)}
                     />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary bg-gradient-to-r from-violet-500 to-violet-50 text-white border-none">Login</button>
                    <button onClick={handleGoogleSignIn} className=" mt-5 btn btn-primary bg-violet-600 text-white border-none">Sign In Google</button>
                    </div>
                    <p className="text-center text-black py-6">Do not have an account ? <Link to="/register" className="text-violet-600 font-bold">Please Register</Link></p>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;