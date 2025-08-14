import React from "react";
import ConferenceCard from "./ConferenceCard";
import conferenceData from "../Data/conferenceData.json";
import conferenceData2 from "../Data/conferenceData2.json";

const Events = () => {
  return (
    <div>
      <section className="conference-container">
        {conferenceData.map((conf, index) => (
          <ConferenceCard
            key={index}
            title={conf.title}
            location={conf.location}
            website={conf.website}
          />
        ))}
      </section>

      <div className="conference-divider">
        <h1 className="section-heading2">
          Upcoming International Events Organized by Smart Society{" "}
        </h1>
      </div>
      <section className="conference-container2">
        {conferenceData2.map((conf, index) => (
          <ConferenceCard
            key={index}
            title={conf.title}
            location={conf.location}
            website={conf.website}
          />
        ))}
      </section>

      <div className="mission-container">
        <h1 className="mission-heading">Reserve Your Spot</h1>
        <div className="visitorImage">
          <img src="/media/reserve.png" alt="randomImage" />
        </div>
        <p>
          Join us for this special event and be a part of an unforgettable
          experience. Your presence will add value, and we look forward to
          welcoming you.
        </p>
        <button>Register Now</button>
      </div>
    </div>
  );
};

export default Events;
