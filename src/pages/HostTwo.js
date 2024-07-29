import React from "react"
import { Link } from "react-router-dom"

export default function HostTwo() {
    return (
        <div>

        <div className="HostTwo-container">
        <div className="section-divide4">
            <h1 className="text">Sorry, the page you were looking for was not found.</h1>
            <Link to="HostTwo" className="link-return">return to home</Link>
        </div>
        
        </div>
        <div className="foot">
        <p>Ⓒ 2022 #VANLIFE</p>
        </div>
        
        </div>
   
    )
};