import React, {useState} from 'react'
import Layout from '../../components/Layout/Layout'
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [answer, setAnswer] = useState("");
    const [phone, setPhone]=useState("")
    const [address, setAddress]=useState("");

    const navigate = useNavigate();

    // form function
    const handleSubmit=async(e)=>{
        /*
        position: toast.POSITION.TOP_CENTER,
            className: 'toast-message'*/
        e.preventDefault();
        try {
            const res=await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, {name, email, password, phone, address, answer,});
            if(res.data.success)
            {
                toast.success(res.data.message , {
                    className: 'toast-message'
                });
                navigate("/login");
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
        console.log(process.env.REACT_APP_API);
    }
    return (
        <Layout title={'E-commerce - Register'}>
            <div className='register'>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" value={name} className="form-control" id="exampleInputName" placeholder='Enter Name' 
                            onChange={(e)=>setName(e.target.value)} required
                        />
                    </div>
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
                        <input type="text" value={phone} className="form-control" 
                        onChange={(e)=>setPhone(e.target.value)} id="exampleInputPhone" placeholder='Enter Phone Number' required/>
                    </div>
                    <div className="mb-3">
                        <input type="text" value={address} className="form-control" 
                        onChange={(e)=>setAddress(e.target.value)} id="exampleInputAddress" placeholder='Enter Address' required/>
                    </div>
                    <div className="mb-3">
                        <input
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="What is Your Favorite sports"
                        required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>

            </div>

        </Layout>
    )
}

export default Register