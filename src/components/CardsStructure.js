import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CardsStructure = (props) => {
  const { img, type, price, button, day, color } = props;
  const [currentFilter, setCurrentFilter] = useState('all');

  const handleFilterClick = (filter) => {
    setCurrentFilter(filter);
  };

  const shouldDisplayCard = () => {
    return currentFilter === 'all' || button === currentFilter;
  };

  return (
    <div className="cardvans--container">
     
      <div className="allcars">
        {shouldDisplayCard() && (
          <div>
            <img src={require("../Images/" + img)} alt={type} className="images" />
            <div className="type-price">
              <p>{type}</p>
              <p>${price}</p>
            </div>
            <div className="button-perday">
              <div style={{ backgroundColor: color }} className="button">
                <Link to="" >{button}</Link>
              </div>
              <div className="perday">
                <p>{day}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardsStructure;