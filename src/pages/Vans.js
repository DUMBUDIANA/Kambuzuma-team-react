import React from 'react'
<<<<<<< HEAD
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
    <div className='cards'>
    {Aboutvans}
    </div>
    </div>
  )
}

=======

export default function vans() {
  return (
    <div>vans</div>
  )
}
>>>>>>> 787da4f2ab723b7a1f244c921c0dfaba3b438c77
