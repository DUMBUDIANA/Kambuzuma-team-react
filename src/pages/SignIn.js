
import React from "react"
import { Link } from "react-router-dom"
import  {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom'

export default function LogIn() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/Dashboard")
            console.log(user);
            alert('SignIp Succesfully')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert("Failed to connect network error")
        });
       
    }

    return (
        <div className="Host-page-container">
            
            <h1 className="hostTwo--h1">Sign in to your account</h1>  
         <form action="submit">

             <input

              id="email-address"
              name="email"
              type="email"                                    
              required                                                                                
              placeholder="Email address"
              onChange={(e)=>setEmail(e.target.value)}

              />
             <input 
             id="password"
             name="password"
             type="password"                                    
             required                                                                                
             placeholder="Password"
             onChange={(e)=>setPassword(e.target.value)}
             />
         </form>   

            <Link className="link-HostTwo" to="/Hoss " onClick={onLogin}  >Sign in</Link>

        <p className="HostTwo--p">Don’t have an account? <Link  to="/SignUp"><span className="HostTwo--span">Create one now </span></Link></p>
        <div className="foot">
            <p>Ⓒ 2022 #VANLIFE</p>
        </div>

        </div>
    );
}
