import React from "react"
import { Link } from "react-router-dom"

export default function Host2() {
    return (
        <div className="Host-page-container">
            
            <div className="Host-page-content">
                <h1 className="host--h1">Sorry, the page you were looking for was not found.</h1>  
            </div>

            <Link className="link-Host" to="/Vans">Return to home</Link>
        
        <div className="foot">
            <p>Ⓒ 2022 #VANLIFE</p>
        </div>

        </div>
    );
}