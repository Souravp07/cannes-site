import React from "react";

function About() {
  return (
    <div className="about-container" id="about">
      <h1 className="about-title">ABOUT US</h1>

      <p className="about-description">
        SMART SOCIETY is a US and Canada-based non-profit society with the goal
        of creating a pool of unique ideas and thoughts in the form of short,
        power-packed talks for propelling others to excel in their respective
        fields. It serves as a platform for Makers, Artists, Researchers, and
        Technologists to bring forth their views to the entire world.
      </p>

      <h2 className="events-title">
        International Events Organized by Smart Society
      </h2>

      <div className="about-media">
        <iframe
          src="https://drive.google.com/file/d/1XOoVyYgpHoGJcoU8WlxXCG5HS_vj1kIw/preview"
          width="840"
          height="480"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
}

export default About;
