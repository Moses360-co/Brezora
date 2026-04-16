import React, { useEffect, useState } from "react";
import "./RoomDetails.scss";

const RoomDetails = ({ room, onBack }) => {
  const images = [room.image, ...(room.gallery || [])];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="room-details">
      <button className="back-btn" onClick={onBack}>
        Back to Home 
      </button>

      <header className="room-header">
        <h1>{room.title}</h1>
        <p className="room-time">{room.time}</p>
      </header>

      {/* SLIDER */}
      <div className="auto-slider">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <div className="slide" key={index}>
              <img src={img} alt="" className="slide-img" />
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="room-content">
        <p className="desc">{room.desc}</p>
        <h3 className="price">{room.price}</h3>

        <a
          className="book-btn"
          href={`https://wa.me/${room.phone}?text=Hello, I want to book ${room.title}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact on WhatsApp for booking
        </a>
      </div>
    </section>
  );
};

export default RoomDetails;