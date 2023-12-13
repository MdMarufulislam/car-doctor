
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logimg from '../../../public/assets/images/login/login.svg'
import { useContext } from 'react';
import { context } from '../../Provider/Authprovider';
import axios from 'axios';

const Login = () => {
    const {signIn}= useContext(context)
    const location=useLocation();
    const navigate=useNavigate();

    const handlelogin=(e)=>{
        e.preventDefault()
        console.log("cliked")
        const form=e.target;
        const email=form.email.value;
        const pass=form.pass.value;
        console.log(email, pass);
        signIn(email, pass)
        .then(result=>{
            const loogeduser= result.user;
            console.log(loogeduser)
          
            const user={email};
            axios.post("https://car-doctor-server-eta-ruddy.vercel.app/jwt", user, {withCredentials: true })
            .then(res=>{
                console.log(res.data)
                if(res.data.success){
                    navigate(location?.state ? location?.state : "/")
                }
            })
        })
        .catch(error=>{
            console.log(error.message)
        })

    }
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content ">
                    <div className="text-center lg:text-left">
                        <img src={logimg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm  flex-col lg:flex-row-reverse border border-indigo-600 mx-8 p-5">
                        <form onSubmit={handlelogin} className="card-body">
                            <h1 className='text-center text-2xl font-bold'>Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="password" name='pass' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign in</button>
                                <p className='text-center'>Or Sign In with</p>
                                <button className="btn bg-red-800 border-none btn-primary">Google</button>
                                <h1 className='pt-5 text-xl text-center'>Have an account? <Link to={"/reg"}><span className='text-red-700'>Sign In</span></Link></h1>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;