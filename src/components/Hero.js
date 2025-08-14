import React from "react";

function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="hero-header">
        <h1>Cannes Film, Content Creators Festival & Award ceremony</h1>
        <h4>Canopy by Hilton Cannes, France</h4>
        <h3>
          12<sup>th</sup>April
        </h3>
        <p>2:30pm Onwards</p>
        <h3>Short Films &#9673; Content Creators &#9673; Documentary</h3>
        <button>Register Now</button>
      </div>
      <div className="heroImage">
        <img src="/media/heroBanner.png" />
      </div>
    </div>
  );
}

export default Hero;
