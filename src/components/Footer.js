import React from "react";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container" id="contact">
      <div className="footer-row">
        <div className="footer-column footer-text">
          <h2>GET IN TOUCH</h2>
          <h4>
            cfcc@smartsociety.org
            <br />
            sanghamitra@iem.edu.in
            <br />
            malay.ganguly@iem.edu.in
          </h4>
          <h4>+91 8509974846</h4>
        </div>
        <div className="footer-column footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.336043485153!2d7.042830815495548!3d43.5513692791249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ce818e38802c6d%3A0x52f21973e67f6659!2sCanopy%20by%20Hilton%20Cannes!5e0!3m2!1sen!2sus!4v1662656947835!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Canopy by Hilton Cannes Location"
          ></iframe>
        </div>
      </div>

      <div className="footer-row">
        <div className="footer-column footer-text2">
          <h2>12, April 2025</h2>
          <h4>Venue: Canopy by Hilton Cannes, France</h4>
          <h4>2:30 pm onwards</h4>
        </div>
        <div className="footer-column footer-image-section">
          <img
            src="media/footerImage.png"
            alt="Hotel building"
            className="footer-image"
          />
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <div className="footer-bottom-content">
          <p>
            © Cannes Film, Content Creators Festival & Award Ceremony 2025. All
            rights reserved.
          </p>
          <div className="footer-social-icons">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
