import React, { useState } from 'react';
import CardsData from '../components/CardsStructure.js';
import Card from '../components/Database/Database.jsx';
import {Link} from "react-router-dom"

export default function Vans() {
  const [currentFilter, setCurrentFilter] = useState('all');
  

  const handleFilterClick = (filter) => {
    setCurrentFilter(filter);
  };
  const handleClearFilters = () => {
    setCurrentFilter('all');
  };

  const filteredCards = currentFilter === 'all'
  ? Card
  : Card.filter(item => item.button === currentFilter);

  return (
    <div className="cards--width">
      <div className="top-buttons">
        <h1>Explore our van options</h1>
        <div className="button-container">
          <button
            className={`filter-button simple ${currentFilter === 'Simple' ? 'active' : ''}`}
            onClick={() => handleFilterClick('Simple')}
          >
            Simple
          </button>
          <button
            className={`filter-button luxury ${currentFilter === 'Luxury' ? 'active' : ''}`}
            onClick={() => handleFilterClick('Luxury')}
          >
            Luxury
          </button>
          <button
            className={`filter-button rugged ${currentFilter === 'Rugged' ? 'active' : ''}`}
            onClick={() => handleFilterClick('Rugged')}
          >
            Rugged
          </button>

          <button onClick={handleClearFilters} className="link-filter">
          Clear filters
        </button>
        
        </div>
       
      </div>

      <Link key={Vans.id}    to ={`/vans/${Vans.id}`}><div className="cards">
        {filteredCards.map(item => (
          <CardsData
            key={item.id}
            img={item.image}
            type={item.type}
            price={item.price}
            button={item.button}
            day={item.day}
            color={item.color}
          />
        ))}
      </div> </Link>

      <div className="footer">
        <p>Ⓒ 2022 #VANLIFE</p>
      </div>
    </div>
  );
}


