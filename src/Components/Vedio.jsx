import React from "react";
import "./Vedio.css";
import Vedio1 from "./Vedios/Vedio-1.mp4";
import Vedio2 from "./Vedios/Vedio-2.mp4";
import Vedio3 from "./Vedios/Vedio-3.mp4";

const videos = [
  Vedio1,
  Vedio2,
  Vedio3,
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
