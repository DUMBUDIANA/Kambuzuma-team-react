import React from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ rating, onRatingChange }) => {
  return (
    <div className='the-stars'>
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input 
              type="radio" 
              name="rating"  
              value={ratingValue}  
              onClick={() => onRatingChange(ratingValue)}
              className="hidden"
            />
            <Star
              className="cursor-pointer transition-colors"
              size={24}
              fill={ratingValue <= rating ? "#c77201" : "none"}
              stroke={ratingValue <= rating ? "#c77201" : "#e7d9c7"}
            />
          </label> 
        )
      })}
    </div>
  );
};

export default StarRating;