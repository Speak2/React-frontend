import React from 'react';

const ThingsToKnow = () => {
  return (
    <div className="things-to-know-section">
      <h2>Things to know</h2>
      <div className="things-content">
        <div className="things-column">
          <h3>House rules</h3>
          <p>Check-in after 4:00 PM</p>
          <p>Checkout before 11:00 AM</p>
          <p>2 guests maximum</p>
          <a href="#!" className="show-more">Show more &gt;</a>
        </div>
        <div className="things-column">
          <h3>Safety & property</h3>
          <p>Carbon monoxide alarm not reported</p>
          <p>Smoke alarm not reported</p>
          <p>Not suitable for children and infants</p>
          <a href="#!" className="show-more">Show more &gt;</a>
        </div>
        <div className="things-column">
          <h3>Cancellation policy</h3>
          <p>Add your trip dates to get the cancellation details for this stay.</p>
          <a href="#!" className="show-more">Add dates &gt;</a>
        </div>
      </div>
    </div>
  );
};

export default ThingsToKnow;
