import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import About from "../components/About";
import Events from "../components/Events";
import Members from "../components/Members";
import Mission from "../components/Mission";
import Schedule from "../components/Schedule";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Events />
      <Mission />
      <Members />
      <Schedule />
      <Footer />
    </>
  );
}

export default LandingPage;
