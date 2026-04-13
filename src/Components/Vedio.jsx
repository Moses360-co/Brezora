import React from "react";
import "./Vedio.css";

const videos = [
  "/videos/cottage1.mp4",
  "/videos/cottage2.mp4",
  "/videos/cottage3.mp4",
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
