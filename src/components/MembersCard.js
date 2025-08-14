import React from "react";


const MembersCard = ({ image, name, role, onKnowMore }) => {
  return (
    <div className="member-card">
      <img src={image} alt={name} className="member-image" />
      <h3 className="member-name">{name}</h3>
      <p className="member-role">{role}</p>
      <button className="know-more-btn" onClick={onKnowMore}>
        Know More
      </button>
    </div>
  );
};

export default MembersCard;
