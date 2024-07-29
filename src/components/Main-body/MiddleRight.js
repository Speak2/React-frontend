import React from 'react';
import Shimmer from '../Shimmer/Shimmer';

const MiddleRight = ({ loading }) => {
  return (
    <div className="middle-right">

      {loading ? (<Shimmer />) : (

        <div className="availability-box">


          <div>
            <h3>Add dates for prices</h3>
            <div className="date-inputs">
              <div className="date-input">
                <label htmlFor="check-in">CHECK-IN</label>
                <input type="text" id="check-in" placeholder="Add date" />
              </div>
              <div className="date-input">
                <label htmlFor="check-out">CHECKOUT</label>
                <input type="text" id="check-out" placeholder="Add date" />
              </div>
            </div>
            <div className="guest-select">
              <label htmlFor="guests">GUESTS</label>
              <select id="guests">
                <option>1 guest</option>
                <option>2 guests</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <button className="check-button">Check availability</button>
          </div>


        </div>
      )}

    </div>
  );
};

export default MiddleRight;
