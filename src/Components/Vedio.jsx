import React from "react";
import "./Vedio.css";

const videos = [
  "https://res.cloudinary.com/dxjv0gq3k/video/upload/v1697040911/vid1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1.mp4",
  "https://res.cloudinary.com/dxjv0gq3k/video/upload/v1697040911/vid2_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1_1.mp4",
  "https://youtu.be/5BT6iKDlUgQ?si=n-4eruRl8FeL8Vo3"
];

const Vedio = () => {
  return (
    <section className="cottage-video">
      <h3>COTTAGE VIDEOS</h3>

      <div className="video-wrapper">
        {videos.map((video, index) => (
          <video key={index} controls muted playsInline>
            <source src={video} type="video/mp4" />
          </video>
        ))}
      </div>
    </section>
  );
};

export default Vedio;
