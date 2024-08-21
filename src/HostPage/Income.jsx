import React from 'react'
import { Link } from "react-router-dom";
import logiz from "../images 2/Group 312.png";
import Price from '../HostPage/Price';
import { useState } from 'react';
export default function Income() {

    const [price, setPrice] = useState ([
        {title: '720', date: '1/12/22', id:1},
        {title: '560', date: '10/12/22', id:2},
        {title: '980', date: '23/12/22', id:2}

    ]);

  return (
    <div className="cards--width links-btn">
    <div className="btn-4">
        {/* <div><a href='/'>  Dashboard </a></div> */}
        <Link to="/Dashboard" className='links'>Dashboard</Link>
        <Link to="/Income" className='links'>Income</Link>
        <Link to="/HostVans" className='links'>Vans</Link>
        <Link to="/Reviews" className='links'>Reviews</Link>
    </div>
    <h1 className='header-dashboard'>Income</h1>
    
    <div className="mian">


<div className="more-img">
<p className='p-more'>Last<span className='un-span'>30 days</span></p>
  <h1 className='ini-h1'>$2,260</h1>
  <img src={logiz} alt="help" className='graph-img' />
</div>

<div className="transctions">
  <h4 className='trans-h4 '>Your transctions(3)</h4>
  <p className='p-more' >Last <span className='un-span'>30 days</span></p>
</div>


<Price price={price} />

</div>
  

  <div className="footer">
    <p>Ⓒ 2022 #VANLIFE</p>
  </div>
</div>
  )
}

