import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';

// Fetcher function for SWR
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Swr = () => {
  const [currentFilter, setCurrentFilter] = useState('all');

  // API URLs
  const apiBaseUrlProduction = 'https://kambuzuma-vanlife-backend-production.up.railway.app';
  const apiBaseUrlLocal = 'http://localhost:5000';

  // Use the appropriate API based on the environment
  const apiUrl = window.location.hostname === 'localhost' ? apiBaseUrlLocal : apiBaseUrlProduction;
  const { data: vans, error, isValidating } = useSWR(`${apiUrl}/vans`, fetcher);

  const handleFilterClick = (filter) => {
    setCurrentFilter(filter);
  };

  const shouldDisplayCard = (button) => {
    return currentFilter === 'all' || button === currentFilter;
  };

  const handleClearFilters = () => {
    setCurrentFilter('all');
  };

  if (error) return <div className='failed'>Failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    <>
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
                <img
                  src={`${apiUrl}${van.image}`} // Use the current API URL
                  alt={van.type}
                  className="images"
                />
                <div className="type-price">
                  <p>{van.name}</p>
                  <p>${van.price}</p>
                </div>
                <div className="button-perday">
                  <Link to={`/vans/${van._id}`} state={{ vanId: van._id }}>
                    <div style={{ backgroundColor: van.color }} className="button">
                      {van.button}
                    </div>
                  </Link>
                  <div className="perday">
                    <p>/day</p>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
      <div className="footerB">
        <p>Ⓒ 2022 #VANLIFE</p>
      </div>
    </>
  );
};

export default Swr;
