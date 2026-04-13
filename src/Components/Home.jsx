import React, { useRef, useState, useEffect } from "react";
import "./Home.scss";

import Vedio from "./Vedio";
import RoomDetails from "./RoomDetails";
import adventure from "../Music/adventure.mp3";

// IMAGES
import CampfireImg from "../Components/images/Campfire.jpeg";
import BBQ from "../Components/images/bbq.jpeg";

import img1 from "./images/Image1.jpeg";
import img2 from "./images/Single room villa4.jpeg";
import img3 from "./images/Image3.jpeg";
import img4 from "./images/Image4.jpeg";
import img5 from "./images/Single room villa6.jpeg";
import img6 from "./images/Single room villa5.jpeg";
import img7 from "./images/Single room villa9.jpeg";
import img8 from "./images/Single room villa10.jpeg";
import img9 from "./images/Single room villa11.jpeg";
import img10 from "./images/2bhk villa2.jpeg";
import img11 from "./images/2bhk villa4.jpeg";

import bgImage from "../assets/bg.jpg";

const rooms = [
  {
    id: 1,
    title: "Single Room / Breezora I",
    time: "Check-out 10:00 AM",
    price: "₹2000 / Day",
    image: img2,
    gallery: [img6, img7, img5, img8],
    desc: "Perfect for solo travelers.",
  },
  {
    id: 2,
    title: "Single Room / Breezora II",
    time: "Check-out 10:00 AM",
    price: "₹2000 / Day",
    image: img2,
    gallery: [img6, img8, img7, img9],
    desc: "Premium interiors with view.",
  },
  {
    id: 3,
    title: "2BHK Villa",
    time: "Check-out 10:00 AM",
    price: "₹4000 / Day",
    image: img10,
    gallery: [img10, img11],
    desc: "Perfect for families.",
  },
  {
    id: 4,
    title: "3BHK Villa",
    time: "Check-out 10:00 AM",
    price: "₹6000 / Day",
    image: img3,
    gallery: [img3, img4],
    desc: "Luxury stay with scenic view.",
  },
  {
    id: 5,
    title: "4BHK Villa",
    time: "Check-out 10:00 AM",
    price: "₹8000 / Day",
    image: img1,
    gallery: [img1, img4],
    desc: "Best for large groups.",
  },
];

const services = [
  {
    img: BBQ,
    title: "BBQ",
    desc: "Fresh BBQ with grill setup.",
    price: "₹1200",
    text: "BBQ service",
  },
  {
    img: CampfireImg,
    title: "Campfire",
    desc: "Cozy evening fire setup.",
    price: "₹1200",
    text: "Campfire service",
  },
];

const Home = () => {
  const audioRef = useRef(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.6;
      audioRef.current.muted = true;
    }
  }, []);

  const enableSound = () => {
    if (!soundEnabled && audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.play().catch(() => {});
      setSoundEnabled(true);
    }
  };

  return (
    <section
      className="room-container"
      style={{ backgroundImage: `url(${bgImage})` }}
      onClick={enableSound}
    >
      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source src={adventure} type="audio/mpeg" />
      </audio>

      {/* MUSIC BUTTON */}
      <div className={`music-hint ${soundEnabled ? "active" : ""}`}>
        {soundEnabled ? "🎵 Music Playing" : "🔊 Tap to Enable Music"}
      </div>

      {/* ROOMS */}
      {!selectedRoom && (
        <div className="room-list">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="room-card"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedRoom(room);
              }}
            >
              <div className="room-image">
                <img src={room.image} alt={room.title} />
              </div>

              <div className="room-info">
                <h2>{room.title}</h2>
                <p>{room.time}</p>
                <p>{room.desc}</p>
                <span className="price">{room.price}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* DETAILS */}
      {selectedRoom && (
        <RoomDetails
          room={selectedRoom}
          onBack={() => setSelectedRoom(null)}
        />
      )}

      {/* SERVICES */}
      <div className="services-wrapper">
        {services.map((s, i) => (
          <div className="service-cart" key={i}>
            <img src={s.img} alt={s.title} className="service-img" />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="service-price">{s.price}</div>

            <a
              href={`https://wa.me/918124582703?text=Hello, I would like to book ${s.text}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              WhatsApp
            </a>
          </div>
        ))}
      </div>

      <Vedio />
    </section>
  );
};

export default Home;