// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import pic from '../Images/table.png';
// import StarRating from '../components/starrating';

// const ReviewComponent = () => {
//   // State to store all reviews (initially empty)
//   const [reviews, setReviews] = useState([]);
  
//   // State to store the new review being written
//   const [newReview, setNewReview] = useState({ name: "", rating: 0, comment: "" });

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Get current date in the format "Month Day, Year"
//     const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
//     // Create a new review object with a unique id and the current date
//     const newReviewWithId = { ...newReview, id: reviews.length + 1, date: currentDate };
//     // Add the new review to the existing reviews
//     setReviews([...reviews, newReviewWithId]);
//     // Reset the new review form
//     setNewReview({ name: "", rating: 0, comment: "" });
//     // Scroll to the top of the reviews section
//     const reviewsSection = document.querySelector('.rev');
//     reviewsSection.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="cards--width links-btn">
//       {/* Navigation menu */}
//       <div className="btn-4">
//         <Link to="/Dashboard" className='links'>Dashboard</Link>
//         <Link to="/Income" className='links'>Income</Link>
//         <Link to="/HostVans" className='links'>Vans</Link>
//         <Link to="/Reviews" className='links'>Reviews</Link>
//       </div>
      
//       {/* Page header */}
//       <h1 className='header-dashboard'>Your reviews <span className='review-text'>last <span className='text-inside'>30 days</span></span></h1>
      
//       <div className='rev'>
//         {/* Display review image */}
//         <img src={pic} alt="rev" className='reviews-img' />

//         {/* Display total number of reviews */}
//         <p className='scorey'>Reviews({reviews.length})</p>

//         {/* Form for submitting new reviews */}
//         <form onSubmit={handleSubmit} className='review-form fixed-form'>
//           {/* Star rating component */}
//           <StarRating
//             rating={newReview.rating}
//             onRatingChange={(rating) => setNewReview({...newReview, rating})}
//           />
//           {/* Input field for reviewer's name */}
//           <input
//             type="text"
//             value={newReview.name}
//             onChange={(e) => setNewReview({...newReview, name: e.target.value})}
//             placeholder="Your Name"
//             required
//             className="review-input"
//           />
//           {/* Input field for review comment */}
//           <input
//             type="text"
//             value={newReview.comment}
//             onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
//             placeholder="Write your review here..."
//             required
//             className="review-input"
//           />
//           {/* Submit button */}
//           <button type="submit" className="submit-button orange-btn">Submit Review</button>
//         </form>

//         {/* Display existing reviews */}
//         {reviews.map((review) => (
//           <div key={review.id} className='stars-div'>
//             <StarRating rating={review.rating} onRatingChange={() => {}} />
//             <p className='grey'><span className='first-word'>{review.name}</span> {review.date}</p>
//             <p className='evry'>{review.comment}</p>
//             <hr />
//           </div>
//         ))}
//       </div>

//       {/* Footer */}
//       <div className="footer">
//         <p>&#9400; 2022 #VANLIFE</p>
//       </div>
//     </div>
//   );
// };

// export default ReviewComponent;

// Import necessary dependencies
import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import pic from '../Images/table.png';
import StarRating from '../components/starrating';

const ReviewComponent = () => {
  // State to store all reviews (initially empty)
  const [reviews, setReviews] = useState([]);
  
  // State to store the new review being written
  const [newReview, setNewReview] = useState({ name: "", rating: 0, comment: "" });
  
  // Create a ref for the reviews container to enable scrolling
  const reviewsContainerRef = useRef(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Get current date in the format "Month Day, Year"
    const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    // Create a new review object with a unique id and the current date
    const newReviewWithId = { ...newReview, id: reviews.length + 1, date: currentDate };
    // Add the new review to the beginning of the existing reviews
    setReviews([newReviewWithId, ...reviews]);
    // Reset the new review form
    setNewReview({ name: "", rating: 0, comment: "" });
    
    // Scroll to the top of the reviews container
    if (reviewsContainerRef.current) {
      reviewsContainerRef.current.scrollTop = 0;
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
      
      {/* Page header */}
      <h1 className='header-dashboard'>Your reviews <span className='review-text'>last <span className='text-inside'>30 days</span></span></h1>
      
      <div className='rev'>
        {/* Display review image */}
        <img src={pic} alt="rev" className='reviews-img' />
        {/* Display total number of reviews */}
        <p className='scorey'>Reviews({reviews.length})</p>
        
        {/* Form for submitting new reviews */}
        <form onSubmit={handleSubmit} className='review-form fixed-form'>
          {/* Star rating component */}
          <StarRating
            rating={newReview.rating}
            onRatingChange={(rating) => setNewReview({...newReview, rating})}
          />
          {/* Input field for reviewer's name */}
          <input
            type="text"
            value={newReview.name}
            onChange={(e) => setNewReview({...newReview, name: e.target.value})}
            placeholder="Your Name"
            required
            className="review-input"
          />
          {/* Input field for review comment */}
          <input
            type="text"
            value={newReview.comment}
            onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
            placeholder="Write your review here..."
            required
            className="review-input"
          />
          {/* Submit button */}
          <button type="submit" className="submit-button orange-btn">Submit Review</button>
        </form>
        
        {/* Scrollable container for displaying existing reviews */}
        <div ref={reviewsContainerRef} className="reviews-container">
          {reviews.map((review) => (
            <div key={review.id} className='stars-div'>
              {/* Display star rating for each review */}
              <StarRating rating={review.rating} onRatingChange={() => {}} />
              {/* Display reviewer's name and date */}
              <p className='grey'><span className='first-word'>{review.name}</span> {review.date}</p>
              {/* Display review comment */}
              <p className='evry'>{review.comment}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <div className="footer">
        <p>&#9400; 2022 #VANLIFE</p>
      </div>
    </div>
  );
};

export default ReviewComponent;


