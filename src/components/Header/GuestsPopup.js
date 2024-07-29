import React, { useState } from 'react'; 

const GuestsPopup = () => {
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const handleIncrement = (type) => {
    setGuests((prevGuests) => ({
      ...prevGuests,
      [type]: prevGuests[type] + 1,
    }));
  };

  const handleDecrement = (type) => {
    setGuests((prevGuests) => ({
      ...prevGuests,
      [type]: Math.max(0, prevGuests[type] - 1),
    }));
  };

  return (
    <div id="guestsPopup" className="guests-popup" style={{ display: 'none' }}>
      <h3>Guests</h3>
      <div className="guest-type">
        <div>
          <span style={{ fontWeight: 550 }}>Adults</span>
          <p>Ages 13 or above</p>
        </div>
        <div className="guest-controls">
          <button
            className="decrement"
            data-type="adults"
            onClick={() => handleDecrement('adults')}
            disabled={guests.adults === 0}
          >
            -
          </button>
          <span id="adultsCount">{guests.adults}</span>
          <button
            className="increment"
            data-type="adults"
            onClick={() => handleIncrement('adults')}
          >
            +
          </button>
        </div>
      </div>
      <div className="guest-type">
        <div>
          <span style={{ fontWeight: 550 }}>Children</span>
          <p>Ages 2-12</p>
        </div>
        <div className="guest-controls">
          <button
            className="decrement"
            data-type="children"
            onClick={() => handleDecrement('children')}
            disabled={guests.children === 0}
          >
            -
          </button>
          <span id="childrenCount">{guests.children}</span>
          <button
            className="increment"
            data-type="children"
            onClick={() => handleIncrement('children')}
          >
            +
          </button>
        </div>
      </div>
      <div className="guest-type">
        <div>
          <span style={{ fontWeight: 550 }}>Infants</span>
          <p>Under 2</p>
        </div>
        <div className="guest-controls">
          <button
            className="decrement"
            data-type="infants"
            onClick={() => handleDecrement('infants')}
            disabled={guests.infants === 0}
          >
            -
          </button>
          <span id="infantsCount">{guests.infants}</span>
          <button
            className="increment"
            data-type="infants"
            onClick={() => handleIncrement('infants')}
          >
            +
          </button>
        </div>
      </div>
      <div className="guest-type">
        <div>
          <span style={{ fontWeight: 550 }}>Pets</span>
          <p>Bringing a service animal?</p>
        </div>
        <div className="guest-controls">
          <button
            className="decrement"
            data-type="pets"
            onClick={() => handleDecrement('pets')}
            disabled={guests.pets === 0}
          >
            -
          </button>
          <span id="petsCount">{guests.pets}</span>
          <button
            className="increment"
            data-type="pets"
            onClick={() => handleIncrement('pets')}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuestsPopup;
