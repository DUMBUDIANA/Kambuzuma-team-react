
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
// import VansDetails from './VansDetails.js';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Swr = () => {
  const [currentFilter, setCurrentFilter] = useState('all');
  
  const {
    data: vans,
    error,
    isValidating,
  } = useSWR('http://localhost:8002/api/vans/fetch', fetcher);


  
  

  const handleFilterClick = (filter) => {
    setCurrentFilter(filter);
  };

  const shouldDisplayCard = (button) => {
    return currentFilter === 'all' || button === currentFilter;
  };
  const handleClearFilters = () => {
    setCurrentFilter('all');
  };

  if (error) return <div className='failed'>failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    <div className="cardvans--container">

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

      <div className="allcars">
        {vans && vans.map((van, index) => (
          shouldDisplayCard(van.button) && (
            <div key={index}>
              <img src={`http://localhost:8002${van.image}`} alt={van.type} className="images" />
              <div className="type-price">
                <p>{van.type}</p>
                <p>${van.price}</p>
              </div>
              <div className="button-perday">
                <Link to={`/vans/${van._id}`} state={{ vanId: van._id }} onClick={() => handleFilterClick(van.button)}>
                  <div style={{ backgroundColor: van.color }} className="button">
                    {van.button}
                  </div>
                </Link>
                <div className="perday">
                  <p>{van.day}</p>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Swr;













