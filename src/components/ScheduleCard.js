import React from "react";


const ScheduleCard = ({ title, date, about }) => {
  return (
    <div className="schedule-card">
      <h3>{title}</h3>
      <p>{date}</p>
      <a
        href={about}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Website ↗
      </a>
    </div>
  );
};

export default ScheduleCard;
