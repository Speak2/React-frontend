import React from 'react';

const ReviewsSection = ({hostInformation}) => {
  return (
    <div className="reviews-section">
      <h2>No reviews (yet)</h2>
      <p>
        <span className="star-icon">&#9733;</span>
        This host has {hostInformation?.review} reviews for other places to stay.
        <a href="#!">Show other reviews</a>
      </p>
    </div>
  );
};

export default ReviewsSection;
