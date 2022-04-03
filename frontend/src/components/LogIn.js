import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        console.log(user)
        if (user) navigate("/home");
    }, [user, loading]);
    return (
        <div className="login">
            <div className="flex flex-col">
                <h1 className="titleWhite">
                    login
                </h1>
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
                /> <br></br>
                <button
                    className="btnOrange"
                    onClick={() => logInWithEmailAndPassword(email, password)}
                >
                    Login
                </button> <br></br>
                <button className="btnGreen" onClick={signInWithGoogle}>
                    Login with Google
                </button>
            </div>
        </div>
    );
}
export default LogIn;