import React from "react";


const MemberPopup = ({ member, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <div className="popup-text">
          <h2>{member.name}</h2>
          <hr />
          <p><strong>{member.role}</strong></p>
          <p>{member.details}</p>
        </div>
        <div className="popup-image">
          <img src={member.image} alt={member.name} />
        </div>
        <button className="popup-close" onClick={onClose}>✕</button>
      </div>
    </div>
  );
};

export default MemberPopup;
