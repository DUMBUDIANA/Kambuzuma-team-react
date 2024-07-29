import React from "react"
<<<<<<< HEAD
// import bgImg from "../assets/images/about-hero.png"
=======
import bgImg from "../Images/image 55.png"
>>>>>>> 787da4f2ab723b7a1f244c921c0dfaba3b438c77
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
<<<<<<< HEAD
           
           {/* <img src={require('../Images/' (props.image2))} alt="" /> */}
=======
            <img src={bgImg} className="about-image" alt="image-bg" />
>>>>>>> 787da4f2ab723b7a1f244c921c0dfaba3b438c77
            <div className="about-page-content">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your destination is waiting.<br />Your van is ready.</h2>
                <Link className="link-button" to="/vans">Explore our vans</Link>
            </div>
<<<<<<< HEAD
=======
        <div className="footer">
            <p>Ⓒ 2022 #VANLIFE</p>
        </div>    
>>>>>>> 787da4f2ab723b7a1f244c921c0dfaba3b438c77
        </div>
    );
}