import React, { useState, useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
  } from "../firebase";

const SignUp = () => {
    
    //email
    const [email, setEmail] = useState('');
    //password
    const [password, setPassword] = useState('');
    //our own custom password check
    const [passwordConfirm, setConfirm] = useState('');
    //name
    const [name, setName] = useState('');
    //user
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();

    //register function
    const register = () => {
        //if there is no name alert
        if(!name) alert("Please Enter Name")
        if(password === passwordConfirm) {
            registerWithEmailAndPassword(name, email, password);
        }else {
            alert("Passwords do not match")
        }
        //register helper function from firebase.justify
        
    };

    useEffect(() => {
        if (loading) return;
        if (user) return navigate("/home");
    }, [user, loading]);

    return (
        <div className="register">
          <div className="flex flex-col">
            <h1 className="titleWhite">
              signup
            </h1>
            <input
              type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="username"
            /> 
            <input
              type="text"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            /> 
            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            /> 
             <input
              type="password"
              className="input"
              value={passwordConfirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="confirm password"
            /> <br></br>
            <button className= "btnOrange" 
              onClick={register}>
              Register
            </button> <br></br>
            <button
              className= "btnGreen"
              onClick={signInWithGoogle}
            > 
              Register with Google
            </button>
            {/* <div className = "forgotPass">
                    <Link to="/reset">Already Have An Account?</Link>
            </div> */}
          </div>
        </div>
      );
    }

export default SignUp;