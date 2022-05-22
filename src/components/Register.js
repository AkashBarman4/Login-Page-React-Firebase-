import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../firebase"

const Register = () => {
    let myStyle = {
        width : '25%'
    }
    const navigate = useNavigate();
    const[values, setValues] = useState({
      name : "",
      email : "",
      password : ""  
    })

    const[buttonDisable, setButtonDisable] = useState(false)

    const handleSubmission = ()=>{
        if(!values.name || !values.email || !values.password){
            alert('Please Fill all the fields');
            return;
        }
        setButtonDisable(true);
        createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(async(response)=>{
            setButtonDisable(false)
            const user = response.user
            await updateProfile(user, {
                displayName: values.name
            })
            // console.log(response)
            alert('Signed Up successfully')
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
                    <input type="text" id="name" className="form-control" placeholder='Enter Your Name'  onChange={(event)=>setValues((prev)=>({...prev, name:event.target.value}))}/>
                </div>
                <div className="form-outline mb-4">
                    <input type="email" id="email" className="form-control" placeholder='Enter Your Email' onChange={(event)=>setValues((prev)=>({...prev, email:event.target.value}))}/>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" id="password" className="form-control" placeholder='Enter Your Password' onChange={(event)=>setValues((prev)=>({...prev, password:event.target.value}))}/>
                </div>


                <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleSubmission} disabled={buttonDisable}>Sign Up</button>


                <div className="text-center">
                    <p>Already a member? <Link to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Register
