import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {signOut} from 'firebase/auth'
import {updateProfile } from "firebase/auth";
import {auth} from "../firebase"

const Home = (props) => {
    let myStyle = {
        width : "18rem"
    }
    const [showResults, setShowResults] = React.useState(false)
    const [showResultsphoto, setShowResultsphoto] = React.useState(false)
    

    const handleSignout = ()=>{
        signOut(auth)
    }
    
    const handleEditPicture = ()=>{
        setShowResultsphoto(true)
    }


    const handleSubmitphoto = ()=>{
        updateProfile(auth.currentUser, {
            photoURL: url
          }).then((res) => {
              alert('Picture Set Successfully! reload to view Changes')
          }).catch((error) => {
              alert(error.message)
          });
          setShowResultsphoto(false)
    }

    const handleEditName = ()=>{
        setShowResults(true);
    }

    
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleOnChangephoto = (event)=>{
        setUrl(event.target.value)
    }

    const handleSubmit = ()=>{
        updateProfile(auth.currentUser, {
            displayName: text
          }).then((res) => {
              alert('Name Changed Successfully! reload to view Changes')
          }).catch((error) => {
              alert(error.message)
          });
        setShowResults(false)
    }
    const[text, setText]=useState('')
    const[url, setUrl] = useState('')

    return (
        <div className='container my-5 justify-content-center d-flex'>
            {(props.name)?
            <>
                <div className="container my-3">
                    <h2 className='mx-2 my-3'>{`Welcome - ${props.name}`}</h2>
                    <h2>
                        <img src={props.photo} alt="" className='avatar' />
                    </h2>
                    <button type="button" class="btn btn-primary" onClick={handleEditPicture}>Edit Profile Picture</button>
                    <button type="button" class="btn btn-primary mx-2" onClick={handleEditName}>Edit Name</button>
                    {showResults?<div className="container">
                        <input className='my-3' type="text" value={text} placeholder='Enter New Name' onChange={handleOnChange}/>
                        <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    </div>
                    :
                    <div></div>}
                    {showResultsphoto?<div className="container">
                        <input className='my-3' type="text" value={url} placeholder='Enter picture Url' onChange={handleOnChangephoto}/>
                        <button className="btn btn-primary" onClick={handleSubmitphoto}>Submit</button>
                    </div>
                    :
                    <div></div>}
                    
                </div>
                <div className="container my-3">
                    <button type="button" class="btn btn-danger" onClick={handleSignout}>Logout</button>
                </div>
                </>
            
            :
                <div className="card text-center" style={myStyle}>
                    <div className="card-body">
                        <h5 className="card-title">SOLRUF India Pvt. Ltd.</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Please Login/Signup to continue</h6>
                        <Link to="/login" className="card-link">Login</Link>
                        <Link to="/register" className="card-link">Register</Link>
                    </div>
                </div>}
        </div>
    )
}

export default Home
