import React, {useState} from 'react'
import Layout from '../../components/Layout/Layout'
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from '../../context/auth';

const Login = () => {
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const navigate = useNavigate();
    const location = useLocation();
    const [auth, setAuth]=useAuth();

    // Login submit
    const handleSubmit=async(e)=>{
        /*
        position: toast.POSITION.TOP_CENTER,
            className: 'toast-message'*/
        e.preventDefault();
        try {
            const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, { email, password});
            if(res.data.success)
            {
                toast.success(res.data.message , {
                    className: 'toast-message'
                });
                setAuth({
                    ...auth,
                    user:res.data.user,
                    token: res.data.token,
                });
                localStorage.setItem('auth', JSON.stringify(res.data))

                navigate(location.state || "/");
            }
            else
            toast.error(res.data.message, {
                className: 'toast-message'
            })
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong!', {
                className: 'toast-message'
            })
        }
    }
  return (
    <Layout>
    <div className='register'>
                <h1>LOGIN</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="email" value={email} className="form-control" id="exampleInputEmail" placeholder='Enter Email'
                            onChange={(e)=>setEmail(e.target.value)} required
                        />
                    </div>
                    <div className="mb-3">
                        <input type="password" value={password} className="form-control" 
                        onChange={(e)=>setPassword(e.target.value)} id="exampleInputPassword1" placeholder='Enter Password' required/>
                    </div>
                    <div className="mb-3">
                        <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                            navigate("/forgot-password");
                        }}
                        >
                        Forgot Password
                        </button>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>

            </div>
        </Layout>
  )
}

export default Login