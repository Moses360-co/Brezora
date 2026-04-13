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

          <div className="about-header">
            <h2>About Brezora</h2>
            <p>
              Brezora is a cottage booking platform offering simple, seamless,
              and comfortable stay experiences for peaceful vacations.
            </p>
          </div>

          <div className="about-content">

            <div className="about-text">
              <p>
                We connect travelers with carefully selected cottages designed
                for comfort, relaxation, and memorable stays.
              </p>

              <p>
                Our mission is to make booking easy while ensuring a warm and
                homely experience for every guest.
              </p>
            </div>

            <div className="about-features">
              <h3>Why Choose Brezora?</h3>
              <ul>
                <li>Handpicked comfortable cottages</li>
                <li>Simple and secure booking</li>
                <li>Peaceful nature stay experience</li>
                <li>Friendly customer support</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;