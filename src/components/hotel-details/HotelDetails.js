import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import NextToHeader from '../next-to-header/NextToHeader';
import PhotoCollage from '../photo-gallary/PhotoCollage';
import MiddleComponent from '../Main-body/MiddleComponent';
import ReviewsSection from '../Reviews/ReviewsSection';
import LocationSection from '../location-section/LocationSection';
import MeetHost from '../Meet-host/MeetHost';
import ThingsToKnow from '../Things-to-know/ThingsToKnow';
import LocationBreadcrumb from '../location-breadcrumb/LocationBreadcrumb';
import ExploreOptions from '../explore-option/ExploreOptions';
import config from '../../configuration/config.json';

const HotelDetails = () => {
  const { slug } = useParams();
  const [hotel, setHotel] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const hotelResponse = await fetch(`http://localhost:3000/api/hotels/${slug}`);
        if (!hotelResponse.ok) {
          throw new Error('Hotel not found');
        }
        const hotelData = await hotelResponse.json();
        
        // Convert base64 to image URLs
        hotelData.images = hotelData.images.map(base64 => `${config.imageTypes.jpeg}${base64}`);
        hotelData.amenities_icon_logos = hotelData.amenities_icon_logos.map(base64 => `${config.imageTypes.png}${base64}`);
        hotelData.host_image = `${config.imageTypes.jpeg}${hotelData.host_image}`;
        hotelData.co_host_images = hotelData.co_host_images.map(base64 => `${config.imageTypes.jpeg}${base64}`);
        
        setHotel(hotelData);

        //fetch rooms api
        const roomsResponse = await fetch(`${config.apiBaseUrl}/rooms/${slug}`);
        if (!roomsResponse.ok) {
          throw new Error('Failed to fetch rooms');
        }
        const roomsData = await roomsResponse.json();
        setRooms(roomsData);

        // simulate loading
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchHotelData();
  }, [slug]);

  
  //refresh mount to top
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // scroll locked
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [loading]);

  // unkown slug
  if (!hotel) {
    return <div>Error 404!!! Hotel not found</div>;
  }

  return (
    <div>
      <Header loading={loading} />
      <NextToHeader title={hotel?.title} loading={loading} />
      <PhotoCollage images={hotel?.images || []} loading={loading} />
      <MiddleComponent
        title={hotel?.title}
        description={hotel?.description}
        guestCount={hotel?.guest_count}
        bedroomCount={hotel?.bedroom_count}
        bathroomCount={hotel?.bathroom_count}
        loading={loading}
        hostInformation={hotel?.host_information}
        amenities={hotel?.amenities}
        amenitiesIcons={hotel?.amenities_icon_logos}
        rooms={rooms}
      />
      <ReviewsSection loading={loading} hostInformation={hotel?.host_information} />
      <LocationSection
        address={hotel?.address}
        latitude={hotel?.latitude}
        longitude={hotel?.longitude}
        loading={loading}
      />
      <MeetHost 
        hostInformation={hotel?.host_information} 
        hostImage={hotel?.host_image}
        coHostImages={hotel?.co_host_images}
        loading={loading} 
      />
      <ThingsToKnow amenities={hotel?.amenities} loading={loading} />
      <LocationBreadcrumb address={hotel?.address} loading={loading} />
      <ExploreOptions loading={loading} />
    </div>
  );
};

export default HotelDetails;