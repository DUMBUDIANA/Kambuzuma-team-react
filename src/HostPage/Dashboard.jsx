import  React, { useState } from 'react';
import { Link } from "react-router-dom";
import Card from '../components/Database/Database';
import Host from './Host';
import staring from "../Images/star.png";
export default function Dashboard() {

  const [Viewall, setShowAll] = useState(false);
  const toggleShow = () => {
    setShowAll(prevShowAll => !prevShowAll);
    };


  const Maphost = (( Viewall ? Card : Card.slice(0, 3)).map(item => {

   
  
  



    return(
    <Host 
    key={item.id}
    image={item.image}
    type={item.type}
    price={item.price}
    day={item.day}

    />

    )
  }))


  





  return (
    <div className="cards--width links-btn">
        <div className="btn-4">
          
            <div><a href='/Dashboard'>  Dashboard </a></div>
            <Link to="/Income" className='links'>Income</Link>
            <Link to="/HostVans" className='links'>Vans</Link>
           
            <Link to="/Reviews" className='links'>Reviews</Link>
            
        </div>
        
        <div className='host--container'>

        <div className="welcome--container">
             <h2>Welcome!</h2>
             <div className="income--last">
                <p>Income last <span className='bold--underline'>30 days</span></p>
                <p>Details</p>
             </div>
            <div className="point--two">
                <p>$2,260</p>
           
        </div>       
    </div>

    <div className="review--score">
        <div className="stars">
            <p className='review--bold'>Review Score</p>
            <div className="img--score">
                <img src={staring} alt="" />
                <p><span className='bold'>5.0</span>/5</p>
            </div>
        </div>

        <p>Details</p>
    </div>


    <div className="your--listed--vans">

        <div className="view--more">
        <p className='listedvans--bold'>Your listed Vans</p>
        <p className='view--all--vans'   onClick={toggleShow}>{Viewall ? 'View less' : 'View all'} </p>
        </div>

  {Maphost}
    </div>
    
    </div>




        
                
      <div className="footer">
        <p>Ⓒ 2022 #VANLIFE</p>
      </div>
    </div>
  );
}
