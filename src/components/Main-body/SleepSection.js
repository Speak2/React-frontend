import React from 'react';

const SleepSection = ({ rooms }) => {
  if (!rooms || rooms.length === 0) {
    return <div className="sleep-section">No room information available.</div>;
  }

  return (
    <div className="sleep-section">
      <h2>Where you'll sleep</h2>
      <div className="bedroom-cards">
        {rooms.map((room, index) => (
          <div key={room.room_slug || index} className="bedroom-card">
            {room.room_images && room.room_images.length > 0 ? (
              <img 
                src={`data:image/jpeg;base64,${room.room_images[0]}`} 
                alt={room.room_title || `Room ${index + 1}`} 
              />
            ) : (
              <img src="/placeholder-bedroom.jpg" alt={room.room_title || `Room ${index + 1}`} />
            )}
            <h3>{room.room_title || `Room ${index + 1}`}</h3>
            <p>{room.bedroom_count} double bed</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SleepSection;