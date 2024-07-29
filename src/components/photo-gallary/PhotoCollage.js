import React from 'react';

import PhotoGrid from './PhotoGrid';
import GalleryOverlay from './GalleryOverlay';

const PhotoCollage = ({ images, loading }) => {
  return (
    <section className="photo-collage">
        <PhotoGrid images={images} loading={loading} />
        <GalleryOverlay />
    </section>
  );
};

export default PhotoCollage;
