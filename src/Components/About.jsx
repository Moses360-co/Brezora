import React from "react";
import "./About.scss";
import bgImage from "../assets/bg.jpg";

const About = () => {
  return (
    <section
      className="about"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overlay">

        <div className="about-container">

          {/* HEADER */}
          <div className="about-header">
            <span className="about-badge">ABOUT BREZORA</span>

            <h2>
              Your Peaceful Stay,
              <span> Beautifully Simplified.</span>
            </h2>

            <p>
              Brezora is a cottage booking platform offering simple,
              seamless, and comfortable stay experiences for peaceful
              vacations.
            </p>
          </div>

          {/* CONTENT */}
          <div className="about-content">

            {/* ABOUT CARD */}
            <div className="about-text glass-card">

              <div className="card-icon">
                🏡
              </div>

              <h3>Comfort Meets Nature</h3>

              <p>
                We connect travelers with carefully selected cottages
                designed for comfort, relaxation, and memorable stays.
              </p>

              <p>
                Our mission is to make booking easy while ensuring a
                warm and homely experience for every guest.
              </p>

            </div>

            {/* FEATURES CARD */}
            <div className="about-features glass-card">

              <div className="card-icon">
                ✨
              </div>

              <h3>Why Choose Brezora?</h3>

              <ul>
                <li>
                  <span>✓</span>
                  Handpicked comfortable cottages
                </li>

                <li>
                  <span>✓</span>
                  Simple and secure booking
                </li>

                <li>
                  <span>✓</span>
                  Peaceful nature stay experience
                </li>

                <li>
                  <span>✓</span>
                  Friendly customer support
                </li>
              </ul>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;