
import { Link } from 'react-router-dom';
import logimg from '../../../public/assets/images/login/login.svg'
import { useContext } from 'react';
import { context } from '../../Provider/Authprovider';

const Reg = () => {
    const {createUser}=useContext(context)
    const handleRef=e=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const pass=form.pass.value;
        console.log(name, email, pass);
        
        createUser(email, pass)
        .then(result=>{
            const user= result.user;
            console.log(user)
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
                        <form onSubmit={handleRef} className="card-body">
                            <h1 className='text-center text-2xl font-bold'>Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                            </div>
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
                                <input type="password" name='pass' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                                <p className='text-center'>Or Sign Up with</p>
                                <button className="btn bg-red-800 border-none btn-primary">Google</button>
                                <h1 className='pt-5 text-xl text-center'>Already have an account? <Link to={"/login"}><span className='text-red-700'>Login</span></Link></h1>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reg;