import React from 'react'; 
import ballonIcon from '../../resources/icons/balloon.png';
import briefcaseIcon from '../../resources/icons/briefcase.png'; 


const MeetHost = ({hostInformation,coHostImages,hostImage}) => {
  return (
    <section className="meet-host">
      <h2>Meet your host</h2>
      <div className="host-container">
        <div className="left-column">
          <div className="host-card">
            <div className="host-left">
              <div className="host-photo">
                <img src={hostImage}alt="Host" className="circular-img" />
              </div>
              <div className="name">
                <h2 className="host-name">{hostInformation?.name}</h2>
                <p className="superhost">{hostInformation?.host}</p>
              </div>
            </div>
            <div className="host-data">
              <div className="info-item">
                <h3>{hostInformation?.review}</h3>
                <p>Reviews</p>
              </div>
              <div className="info-item">
                <h3>{hostInformation?.rating} <span className="star">★</span></h3>
                <p>Rating</p>
              </div>
              <div className="info-item">
                <h3>{hostInformation?.hosting}</h3>
                <p>Years hosting</p>
              </div>
            </div>
          </div>
          <div className="host-details">
            <div className="detail-item">
              <img src={ballonIcon} alt="Icon" className="icon" />
              <p>Born in the {hostInformation?.birth}</p>
            </div>
            <div className="detail-item">
              <img src={briefcaseIcon} alt="Icon" className="icon" />
              <p>My work: {hostInformation?.work}</p>
            </div>
          </div>
          <div className="host-description">
            <p>{hostInformation?.description}</p>
            <a href="#!" className="show-more">Show more &gt;</a>
          </div>
        </div>
        <div className="right-column">
          <div className="superhost-info">
            <h3>Fernando is a {hostInformation?.host}</h3>
            <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
          </div>
          <div className="co-hosts">
            <h3>Co-hosts</h3>
            <div className="co-host-list">
              <div className="co-host">
                <img src={coHostImages[0]} alt="Co-host" className="circular-img" />
                <p>{hostInformation?.coHost1}</p>
              </div>
              <div className="co-host">
                <img src={coHostImages[1]} alt="Co-host" className="circular-img" />
                <p>{hostInformation?.coHost2}</p>
              </div>
            </div>
          </div>
          <div className="host-stats">
            <h3>Host details</h3>
            <p>Response rate: 100%</p>
            <p>Responds within an hour</p>
          </div>
          <button className="message-host">Message Host</button>
        </div>
      </div>
    </section>
  );
};

export default MeetHost;
