import React from 'react'
import Card from '../components/Database/Database'
import CardsStructure from '../components/CardsStructure'
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
    <div className='cards'>
    {Aboutvans}
    </div>
  )
}

