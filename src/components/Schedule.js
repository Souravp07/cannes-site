import React, { useState } from "react";
import ScheduleData from "../Data/ScheduleData.json";


const Schedule = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // const ScheduleData = ScheduleData;


  return (
    <div className="schedule-page" id="schedule">
      <h1 className="main-title">EVENT SCHEDULE</h1>
      <section className="schedule-container">
        {ScheduleData.map((event, index) => (
          <div
            key={index}
            className={`schedule-card ${hoveredIndex === index ? "expanded" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="schedule-left">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                alt="event icon"
                className="schedule-icon"
              />
              <div>
                <h3>{event.title}</h3>
                {hoveredIndex === index && event.details && (
                  <p className="schedule-details">{event.details}</p>
                )}
              </div>
            </div>
            <div className="schedule-right">
              <p className="time">{event.time}</p>
              <p className="duration">Duration: {event.duration}</p>
            </div>
          </div>
        ))}
      </section>
      <br />
      <br />
      <div className="rules-container">
        <a href="https://cfccf.smartsociety.org/assets/CFCCF_Short_Docu_Film%20Festival%20Rule%20Book-CA2OpbqD.pdf" target="_blank" rel="noopener noreferrer">View Rules</a>
      </div>
      <br/>
    </div>
  );
};

export default Schedule;
