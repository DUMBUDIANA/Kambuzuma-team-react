
import React from 'react'
import { Link } from "react-router-dom";
import Card from '../components/Database/Database';
import Listed from './Listed';

export default function Vans() {


  const Maphost = Card.map(item => 
  
    <Listed
 
    key={item.id}
    image={item.image}
    type={item.type}
    price={item.price}
    day={item.day}

   />

);

  return (
    <div className="cards--width links-btn">
    <div className="btn-4">
        {/* <div><a href='/'>  Dashboard </a></div> */}
        <Link to="/Dashboard" className='links'>Dashboard</Link>
        <Link to="/Income" className='links'>Income</Link>
        <Link to="/HostVans" className='links'>Vans</Link>
        <Link to="/Reviews" className='links'>Reviews</Link>
    </div>
    <h1 className='header-dashboard'>Your listed vans</h1>
    
    <div className="vans--more">
      <h1>{Maphost }</h1>
    </div>
   
  

  <div className="footer">
    <p>Ⓒ 2022 #VANLIFE</p>
  </div>
</div>
)
}
