import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ForgotPasssword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`, {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Forgot Password - Ecommerce APP"}>


        <div className='register'>
                <h1>RESET PASSWORD</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="email" value={email} className="form-control" id="exampleInputEmail" placeholder='Enter Email'
                            onChange={(e)=>setEmail(e.target.value)} required
                        />
                    </div>
                    <div className="mb-3">
                        <input type="text" value={answer} className="form-control" 
                        onChange={(e)=>setAnswer(e.target.value)} id="exampleInputEmail" placeholder='Enter your favourite Sports' required/>
                    </div>
                    <div className="mb-3">
                        <input type="password" value={newPassword} className="form-control" 
                        onChange={(e)=>setNewPassword(e.target.value)} id="exampleInputPassword1" placeholder='Enter New Password' required/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">RESET</button>
                </form>

            </div>



      
    </Layout>
  );
};

export default ForgotPasssword;