import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase"

const Login = () => {
    let myStyle = {
        width : '25%'
    }

    const navigate = useNavigate();
    const[values, setValues] = useState({
      email : "",
      password : ""  
    })
    const[buttonDisable, setButtonDisable] = useState(false)
    const handleSubmission = ()=>{
        if(!values.email || !values.password){
            alert('Please Fill all the fields');
            return;
        }
        setButtonDisable(true);
        signInWithEmailAndPassword(auth, values.email, values.password)
        .then(async(response)=>{
            // console.log(response)
            navigate("/")
        })
        .catch((err)=>{
            setButtonDisable(false)
            alert(err.message)
        })
    }
    return (
        <div className='container my-3' style={myStyle}>
            <form>
                <div className="form-outline mb-4">
                    <input type="email" id="form2Example1" className="form-control" placeholder='Enter Your Email' onChange={(event)=>setValues((prev)=>({...prev, email:event.target.value}))}/>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control" placeholder='Enter Your Password' onChange={(event)=>setValues((prev)=>({...prev, password:event.target.value}))}/>
                </div>


                <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleSubmission} disabled={buttonDisable}>Log in</button>


                <div className="text-center">
                    <p>Not a member? <Link to="/register">Register</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Login
