import React from 'react'; 
import shareIcon from '../../resources/share.png'
import Shimmer from '../Shimmer/Shimmer';

const PhotoGrid = ({ images, loading }) => {
  return (
    <div className="photo-grid">
      <div className="slider-buttons">
        <button className="slider-btn share-btn">
          <img src={shareIcon} alt="Share" className="heart-icon-1" />
        </button>
        <div className="right-buttons">
          <button id="saveButton-2" className="search-option heart-button">
            <svg className="heart-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M16,28.261c0,0-14-7.926-14-17.046c0-9.356,13.159-10.399,14-0.454c1.011-9.938,14-8.903,14,0.454
              C30,20.335,16,28.261,16,28.261z" />
            </svg>
          </button>
        </div>
        <div className="image-counter">1 / 5</div>
      </div>
      <div className="photo-item main-photo">
      {loading ? (<Shimmer />) : (
          <img src={images[0]} alt=" " />
      )}
      </div>

      <div className="photo-item">
      {loading ? (<Shimmer />) : (
          <img src={images[1]} alt=" " />
      )}
      </div>

      <div className="photo-item">
      {loading ? (<Shimmer />) : (
      <img src={images[2]} alt=" " />
      )}
      </div>

      <div className="photo-item">
      {loading ? (<Shimmer />) : (
          <img src={images[3]} alt=" " />
      )}
      </div>

      <div className="photo-item">
      {loading ? (<Shimmer />) : (
          <img src={images[4]} alt=" " />
      )}
      </div>
      {loading ? (<Shimmer />) : (
          <button className="show-all-photos">
          <span className="button-icon"> &#8942;&#8942;&#8942;</span>
          Show all photos
        </button>
      )}
      
    </div>
  );
};

export default PhotoGrid;
