import React from 'react'
import { Link } from "react-router-dom";
import star from 'C:/Users/UncommonStudent/Pictures/Kambuzuma-team-react-main/src/Images/star.png';
import pic from 'C:/Users/UncommonStudent/Pictures/Kambuzuma-team-react-main/src/Images/table.png'

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
    
     <div className='rev'>
    <img src={pic} alt="rev" />

      <p className='scorey'>Reviews(2)</p>

      <div className='stars-div'>

        <div className='the-stars'>
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
      </div>

      <p className='grey'><span className='first-word'>Elliot</span> December 1, 2022</p>
      <p className='evry'>The beach bum is such as awesome van!Such as comfortable <br />trip.We had it for 2 weeks and there was not a single issue. <br />Super clean when we picked it up and the host is very <br />comfortable and understanding. Highly recommend!</p>
    
     <hr />
      </div>

      <div className='the-div'>

        <div className='the-stars2'>
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
      <img src={star} alt="" />
      </div>

      <p className='grey'><span className='first-word'>Sandy</span> November 23, 2022</p> 
      <p>This is our third time using the Modest Explorer for our travels <br /> and we love it! No complaints, absolutely perfect!</p>
      <hr />
      </div>
    
      </div>

   
  

  <div className="footer">
    <p>Ⓒ 2022 #VANLIFE</p>
  </div>
</div>
  )
}
