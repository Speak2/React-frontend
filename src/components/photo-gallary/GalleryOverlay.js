import React from 'react'; 

const GalleryOverlay = () => {
  return (
    <div id="gallery-overlay" className="gallery-overlay">
      <button id="close-gallery" className="gallery-btn close-btn">× Close</button>
      <div id="photo-counter" className="photo-counter">1 / 37</div>
      <div className="gallery-actions">
        <button id="share-gallery" className="gallery-btn">
          <img src="resources/share.png" alt="Share" className="gallery-icon" />
        </button>
        <button id="save-gallery" className="gallery-btn">
          <img src="resources/heart.png" alt="Save" className="gallery-icon" />
        </button>
      </div>
      <div className="gallery-content">
        <img id="gallery-image" src="resources/image 1.webp" alt=" " />
      </div>
      <button id="prev-image" className="gallery-btn nav-btn prev-btn">&lt;</button>
      <button id="next-image" className="gallery-btn nav-btn next-btn">&gt;</button>
    </div>
  );
};

export default GalleryOverlay;
