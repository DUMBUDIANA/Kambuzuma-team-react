
import React from "react"
import { Link } from "react-router-dom"

export default function LogIn() {
    return (
        <div className="Host-page-container">
            
            <h1 className="hostTwo--h1">Sign in to your account</h1>  
         <form action="submit">
             <input type="text" name="Email Address" placeholder="Email Address"/>
             <input type="text" name="PassWord" placeholder="PassWord" />
         </form>   

            <Link className="link-HostTwo" to="/Hoss ">Sign in</Link>

        <p className="HostTwo--p">Don’t have an account? <Link  to="/SignUp"><span className="HostTwo--span">Create one now </span></Link></p>
        <div className="foot">
            <p>Ⓒ 2022 #VANLIFE</p>
        </div>

        </div>
    );
}
