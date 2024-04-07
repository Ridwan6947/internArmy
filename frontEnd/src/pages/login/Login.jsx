import {Link  , useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast'
import {useState} from 'react'
import axios from 'axios';


const Login = () => {
    const[email , setEmail] = useState("");
    const[password , setPassword] = useState("");
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/v1/login' , {email , password})
        .then(result =>{
            console.log(result);
            toast.success("Login successfully");
            navigate('/home');   
        })
        .catch(err=>{
            console.log(err);
            toast.error(err.response.data.message);
        })
    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 max-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-bold text-center text-gray-300'>
                Login-
                <span className='text-purple-500'>Chatter</span>
            </h1>
            <form action="onSubmit">
                <div>
                    <label className='label p-2'>
                        <span className='label-text text-gray-500 text-base'>Email</span>
                    </label>
                    <input type="text" placeholder="Enter your Email" className="input input-bordered w-full h-10" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className='label p-2'>
                        <span className='label-text text-gray-500 text-base'>Password</span>
                    </label>
                    <input type="password" placeholder="Enter your Password" className="input input-bordered w-full h-10" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Link to='/signup' className='text-sm hover:underline' hover:text-purple-500 mt-2 inline-block>{"Don't"} have an account? Sign Up</Link>
                <div>
                    <button type="submit" onClick={handleSubmit} className='btn btn-block btn-sm mt-2'>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login