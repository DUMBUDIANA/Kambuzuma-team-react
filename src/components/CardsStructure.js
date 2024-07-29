import React from 'react'
import { Link } from 'react-router-dom';

const CardsStructure = (props) => {
  return (
    <div className='cardvans--container'>
    
    <div className="allcars">

      <img src={require("../Images/" + props.img)} alt="" className='images'/>

      <div className="type-price">

      <p>{props.type}</p>
      <p>${props.price}</p>

      </div>
      
      <div className="button-perday">
        <div style={{ backgroundColor : props.color }} className="button">
        <Link to="">{props.button}</Link>
        </div>
        

        <div className="perday">

          <p>{props.day}</p>
        </div>
      </div>

    </div>


    </div>
  )
}

export default CardsStructure;