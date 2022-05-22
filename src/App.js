import React, { useEffect,useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'; 

import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import {auth} from "./firebase"

function App() {
  const [userName, setUserName] = useState('');
  const [photo, setPhoto] = useState('');
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName)
        setPhoto(user.photoURL)
      }
      else{
        setUserName('');
        setPhoto('');
      }
    })
  },[])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home name = {userName} photo = {photo}/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
