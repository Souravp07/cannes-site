import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const ConferenceCard = ({ title, location, website }) => {
  return (
    <div className="conference-card">
      <h3>{title}</h3>
      
      <div className="conference-location">
        <FaMapMarkerAlt className="location-icon" />
        <span>{location}</span>
      </div>

      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="visit-btn"
      >
        Visit Website ↗
      </a>
    </div>
  );
};

export default ConferenceCard;
