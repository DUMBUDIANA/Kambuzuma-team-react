import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import pic from '../Images/table.png';
import StarRating from '../components/starrating';

// Define the base URL for your API
const API_BASE_URL = 'http://localhost:5000';  

const ReviewComponent = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: "", rating: 0, comment: "" });
  const reviewsContainerRef = useRef(null);

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
      }
      return date.toLocaleDateString();
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Unknown Date';
    }
  };
  

  // Fetch reviews from the API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/reviews`);
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        // You might want to set an error state here to display to the user
      }
    };

    fetchReviews();
  }, []);  // Empty dependency array means this effect runs once on mount

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewToSubmit = {
      name: newReview.name,
      rating: newReview.rating,
      comment: newReview.comment,
      // van and user are optional now, so we don't need to include them
    };
  
    try {
      const response = await fetch(`${API_BASE_URL}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewToSubmit),
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit review');
      }
  
      const submittedReview = await response.json();
      setReviews([submittedReview, ...reviews]);
      setNewReview({ name: "", rating: 0, comment: "" });
  
      // Scroll to the top of the reviews container
      if (reviewsContainerRef.current) {
        reviewsContainerRef.current.scrollTop = 0;
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      // You might want to set an error state here to display to the user
    }
  };

  return (
    <div className="cards--width links-btn">
      {/* Navigation menu */}
      <div className="btn-4">
        <Link to="/Dashboard" className='links'>Dashboard</Link>
        <Link to="/Income" className='links'>Income</Link>
        <Link to="/HostVans" className='links'>Vans</Link>
        <Link to="/Reviews" className='links'>Reviews</Link>
      </div>
      
      <h1 className='header-dashboard'>Your reviews <span className='review-text'>last <span className='text-inside'>30 days</span></span></h1>
      
      <div className='rev'>
        <img src={pic} alt="rev" className='reviews-img' />
        <p className='scorey'>Reviews({reviews.length})</p>
        
        <form onSubmit={handleSubmit} className='review-form fixed-form'>
          <StarRating
            rating={newReview.rating}
            onRatingChange={(rating) => setNewReview({...newReview, rating})}
          />
          <input
            type="text"
            value={newReview.name}
            onChange={(e) => setNewReview({...newReview, name: e.target.value})}
            placeholder="Your Name"
            required
            className="review-input"
          />
          <input
            type="text"
            value={newReview.comment}
            onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
            placeholder="Write your review here..."
            required
            className="review-input"
          />
          <button type="submit" className="submit-button orange-btn">Submit Review</button>
        </form>
        
        <div ref={reviewsContainerRef} className="reviews-container">
          {reviews.map((review) => (
            <div key={review.id} className='stars-div'>
              <StarRating rating={review.rating} onRatingChange={() => {}} />
              <p className='grey'><span className='first-word'>{review.name}</span> {formatDate(review.createdAt)}</p>
              <p className='evry'>{review.comment}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
      
      <div className="footer">
        <p>&#9400; 2022 #VANLIFE</p>
      </div>
    </div>
  );
};

export default ReviewComponent;