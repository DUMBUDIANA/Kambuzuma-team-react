import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
<<<<<<< HEAD
        <div className="home-container">
    
           

            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="vans">Find your van</Link>
        </div>
=======
        <div>
        <div className="home-container">
        <div className="section-divide3">
            <h1 className="text-spacing">You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="vans" className="link-banner">Find your van</Link>
        </div>
        
        </div>
        <div className="footer">
        <p>Ⓒ 2022 #VANLIFE</p>
        </div>
        </div>
   
>>>>>>> 787da4f2ab723b7a1f244c921c0dfaba3b438c77
    )
};