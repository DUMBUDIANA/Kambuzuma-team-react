import React from "react"
import { Link } from "react-router-dom";
import {  signOut } from "firebase/auth";
import {auth} from './Firebase';
import { useNavigate } from 'react-router-dom';
export default function Host2() {

    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }
    return (
        <div className="Host-page-container">
            
            <div className="Host-page-content">
                <h1 className="host--h1">Sorry, the page you were looking for was not found.</h1>  
            </div>

            <Link className="link-Host" to="/Vans" onClick={handleLogout} >Log out</Link>
        
        <div className="foot">
            <p>Ⓒ 2022 #VANLIFE</p>
        </div>

        </div>
    );
}