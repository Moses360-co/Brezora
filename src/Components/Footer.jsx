import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";

import "./Footer.scss";
import bgImage from "../assets/footerbg.jpg";

function Footer() {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="footer-overlay">

        <div className="footer-grid">

          {/* ABOUT */}
          <div className="footer-card">
            <h3>BreZora</h3>
            <p>
              A peaceful cottage stay designed for comfort and relaxation.
              Surrounded by nature with modern amenities for a memorable experience.
            </p>
          </div>

          {/* ADDRESS */}
          <div className="footer-card">
            <h3>Address</h3>
            <p>
              BreZora Stay <br />
              Bharathinagar <br />
              Tamil Nadu - 624101 <br />
              India
            </p>
          </div>

          {/* SOCIAL */}
          <div className="footer-card">
            <h3>Follow Us</h3>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <CiFacebook /> Facebook
              </a>

              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <IoLogoInstagram /> Instagram
              </a>

              <a href="https://google.com" target="_blank" rel="noreferrer">
                <CiLocationOn /> Location
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} CodeNova. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;