import React from 'react'
import { Link } from "react-router-dom";

export default function Reviews() {
  return (
    <div className="cards--width links-btn">
    <div className="btn-4">
        <div><a href='/'>  Dashboard </a></div>
        <Link to="/Income" className='links'>Income</Link>
        <Link to="/HostVans" className='links'>Vans</Link>
        <Link to="/Reviews" className='links'>Reviews</Link>
    </div>
    
    <h1 className='header-dashboard'>Your reviews <span className='review-text'>last <span className='text-inside'>30 days</span></span></h1>
    
    
   
  

  <div className="footer">
    <p>Ⓒ 2022 #VANLIFE</p>
  </div>
</div>
  )
}
