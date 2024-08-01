import React from 'react'
import CardsStructure from '../components/CardsStructure'
import Card from '../components/Database/Database'


export default function Vans() {
  const Aboutvans = Card.map(item => {
   
    return(

         

          <CardsStructure
          img={item.image}
          type={item.type}
          price={item.price}
          button={item.button}
          day={item.day}
          color={item.color}

          />
    )
  })

  return (
<div className="cards--width">
    <div className="top-buttons">
    <h1>Explore our van options</h1>
    <button>Simple</button>
    <button>Luxury</button>
    <button>Rugged</button>
    <a href='/'>Clear filters</a>

    </div>
   

    <div className='cards'>
    {Aboutvans}
    </div>
    <div className="footer">
        <p>Ⓒ 2022 #VANLIFE</p>
        </div> 
    </div>
  )
}
