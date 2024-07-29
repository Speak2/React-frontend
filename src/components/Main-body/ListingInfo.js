import React from 'react';
import hostPicture from '../../resources/host-picture.png';
import checkIn from '../../resources/icons/check-in.png';
import host from '../../resources/icons/check-in.png';
import Shimmer from '../Shimmer/Shimmer';

const ListingInfo = ({title, description, guestCount, bedroomCount, bathroomCount, loading,hostInformation }) => {
  return (
    <div className="listing-info">
      <div className="title-container-2">
        {loading ? (<div className="title-shimmer"> <Shimmer /> </div>) : (
          <h1>{title}</h1>
        )}
      </div>
      {loading ? (<div className="title-shimmer"> <Shimmer /> </div>) : (
        <h2 className="listing-title">Entire rental unit in Lima, Peru</h2>
      )}
      {loading ? (<div className="title-shimmer"> <Shimmer /> </div>) : (
        <p className="listing-details">{guestCount} guests ·{bedroomCount} bedroom ·{bedroomCount} bed ·{bathroomCount} bath</p>
      )}

      <div className="listing-div">
        {loading ? (<div className="listing-div"> <Shimmer /> </div>) : (
          <span className="listing-tag"> New</span>
        )}
      </div>


      <div className="host-info">
      {loading ? (<div className="aonther"> <Shimmer /> </div>) : (

        <div><img src={hostPicture} alt="Host Fernando" className="host-image" /></div>
      )}

      {loading ? (<div className="listing-div"> <Shimmer /> </div>) : (
          <div className="host-details">
              <p>Hosted by {hostInformation?.name}</p>
              <p className="host-status">{hostInformation?.host} · {hostInformation?.hosting} years hosting</p>
            </div>
            
      )}
      </div>
      
      {loading ? (<div className="amenity-check-in-shimmer"> <Shimmer /> </div>) : (
          <div className="amenity">
          <img src={checkIn} alt="Key icon" className="amenity-icon" />
          <div>
            <h3>Self check-in</h3>
            <p>Check yourself in with the smartlock.</p>
          </div>
        </div>
            
      )}
      

      {loading ? (<div className="amenity-check-in-shimmer"> <Shimmer /> </div>) : (
          <div className="amenity">
          <img src={host} alt="Medal icon" className="amenity-icon" />
          <div>
            <h3>Fernando is a {hostInformation?.host}</h3>
            <p>Superhosts are experienced, highly rated Hosts.</p>
          </div>
        </div>
            
      )}

      
      {loading ? (<div className="amenity-extra"> <Shimmer /> </div>) : (
          <div className="translation-note">
          <p>
            Some info has been automatically translated.{' '}
            <a href="#!" className="show-more">Show original</a>
          </p>
        </div>
            
      )}
      

      

      <div className="listing-description"> 
        <p>
          {description}
        </p>
        <a href="#!" className="show-more">Show more</a>
      </div>
    </div>
  );
};

export default ListingInfo;
