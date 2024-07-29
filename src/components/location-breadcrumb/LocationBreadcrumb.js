import React from 'react';

const LocationBreadcrumb = ({address}) => {
  return (
    <div className="location-breadcrumb">

      <a href="#!">{address}</a>
      {/* <a href="#!">Peru</a> &gt; <a href="#!">Lima Province</a> &gt; <a href="#!">Jesús María</a> */}
    </div>
  );
};

export default LocationBreadcrumb;
