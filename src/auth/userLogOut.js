import React from 'react';
import { Link, UseNavigate } from "react-router-dom";
import { projectAuth } from '../pages/Firebase';

const userLogOut = () => {
    const navigate = UseNavigate();
    let error = null;

    const logOut = async () => {
        error = null;
        try {
            await projectAuth.signOut();
        } catch(err) {
            error = err.message;
        }
    }

    const handleLogout = async () => {
        await logOut();
        if (!error) {
            navigate("/");
        }
    }

    return (
        <div className="Host-page-container">
            <div className="Host-page-content">
                <h1 className="host--h1">Sorry, the page you were looking for was not found.</h1>
                {error && <p className="error-message">{error}</p>}  
            </div>

            <Link className="link-Host" to="/Vans" onClick={handleLogout}>Log out</Link>
        
            <div className="foot">
                <p>Ⓒ 2022 #VANLIFE</p>
            </div>
        </div>
    );
}

export default userLogOut;
