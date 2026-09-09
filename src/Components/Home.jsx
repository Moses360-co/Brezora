import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import "./Home.scss";

import Vedio from "./Vedio";
import RoomDetails from "./RoomDetails";

import adventure from "../Music/adventure.mp3";

import CampfireImg from "../Components/images/Campfire.jpeg";
import BBQ from "../Components/images/bbq.jpeg";

import bgImage from "../assets/bg.jpg";

import { getRooms } from "../services/roomService";


// =====================================================
// SERVICES
// =====================================================

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


// =====================================================
// HOME COMPONENT
// =====================================================

function Home() {

  const audioRef =
    useRef(null);


  const [soundEnabled, setSoundEnabled] =
    useState(false);


  const [rooms, setRooms] =
    useState([]);


  const [selectedRoom, setSelectedRoom] =
    useState(null);


  // ===================================================
  // LOAD ROOMS
  // ===================================================

  const loadRooms = () => {

    const data = getRooms();

    setRooms(data);
  };


  // ===================================================
  // INITIAL LOAD
  // ===================================================

  useEffect(() => {

    loadRooms();


    const handleRoomUpdate = () => {

      loadRooms();
    };


    window.addEventListener(
      "roomsUpdated",
      handleRoomUpdate
    );


    return () => {

      window.removeEventListener(
        "roomsUpdated",
        handleRoomUpdate
      );

    };

  }, []);


  // ===================================================
  // MUSIC
  // ===================================================

  const toggleSound = (event) => {

    event.stopPropagation();


    if (!audioRef.current) {

      return;
    }


    if (soundEnabled) {

      audioRef.current.pause();

      setSoundEnabled(false);

      return;
    }


    audioRef.current
      .play()
      .then(() => {

        setSoundEnabled(true);

      })
      .catch(() => {

        console.log(
          "Audio playback blocked by browser."
        );

      });

  };


  // ===================================================
  // VIEW ROOM DETAILS
  // ===================================================

  const handleViewDetails = (room) => {

    setSelectedRoom(room);


    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  // ===================================================
  // BACK TO ROOMS
  // ===================================================

  const handleBack = () => {

    setSelectedRoom(null);


    loadRooms();


    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  // ===================================================
  // RENDER
  // ===================================================

  return (
    <>

      {/* =================================================
          MUSIC BUTTON
      ================================================= */}

      <button
        type="button"
        className={`music-control ${
          soundEnabled ? "active" : ""
        }`}
        onClick={toggleSound}
        aria-label={
          soundEnabled
            ? "Pause background music"
            : "Play background music"
        }
      >

        <span className="music-icon">
          {soundEnabled ? "🔊" : "🎵"}
        </span>


        <span className="music-content">

          <span className="music-title">

            {soundEnabled
              ? "Music On"
              : "Play Music"}

          </span>


          <span className="music-subtitle">

            {soundEnabled
              ? "Brezora ambience"
              : "Tap to start"}

          </span>

        </span>


        <span
          className="music-bars"
          aria-hidden="true"
        >

          <i></i>
          <i></i>
          <i></i>
          <i></i>

        </span>

      </button>


      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <section
        className="room-container"
        style={{
          backgroundImage:
            `url(${bgImage})`,
        }}
      >


        {/* =================================================
            BACKGROUND MUSIC
        ================================================= */}

        <audio
          ref={audioRef}
          loop
        >

          <source
            src={adventure}
            type="audio/mpeg"
          />

        </audio>


        {/* =================================================
            OVERLAY
        ================================================= */}

        <div className="home-overlay">


          {/* =================================================
              ROOM DETAILS
          ================================================= */}

          {selectedRoom ? (

            <div className="room-details-wrapper">

              <RoomDetails
                room={selectedRoom}
                onBack={handleBack}
              />

            </div>

          ) : (

            <>


              {/* =================================================
                  ROOM LIST
              ================================================= */}

              <div className="room-list">


                {/* =================================================
                    HEADING
                ================================================= */}

                <div className="room-heading">

                  <span className="home-section-label">
                    BREZORA
                  </span>


                  <h1>
                    Stay at Brezora
                  </h1>


                  <p>
                    Discover comfortable rooms and
                    beautiful villas for your perfect stay.
                  </p>

                </div>


                {/* =================================================
                    NO ROOMS
                ================================================= */}

                {rooms.length === 0 ? (

                  <div className="no-rooms">

                    <div className="no-rooms-icon">
                      🏡
                    </div>


                    <h2>
                      No rooms available
                    </h2>


                    <p>
                      Please check again later.
                    </p>

                  </div>

                ) : (


                  /* =================================================
                     ROOM GRID
                  ================================================= */

                  <div className="rooms-grid">

                    {rooms.map((room) => {


                      // --------------------------------------------
                      // AVAILABILITY
                      // --------------------------------------------

                      const isUnavailable =
                        room.available === false;


                      // --------------------------------------------
                      // HOME PAGE IMAGE
                      // --------------------------------------------

                      const homeImage =
                        Array.isArray(room.gallery) &&
                        room.gallery.length > 0
                          ? room.gallery[0]
                          : room.image || null;


                      return (

                        <article
                          key={room.id}
                          className={`room-card ${
                            isUnavailable
                              ? "room-unavailable"
                              : ""
                          }`}
                        >


                          {/* ======================================
                              ROOM IMAGE
                          ====================================== */}

                          <div className="room-image">


                            {homeImage ? (

                              <img
                                src={homeImage}
                                alt={room.title}
                                draggable="false"
                              />

                            ) : (

                              <div className="room-image-placeholder">

                                <span>
                                  🏡
                                </span>


                                <p>
                                  Brezora
                                </p>

                              </div>

                            )}


                            {/* ==================================
                                AVAILABILITY
                            ================================== */}

                            <div
                              className={`availability-badge ${
                                isUnavailable
                                  ? "unavailable"
                                  : "available"
                              }`}
                            >

                              {isUnavailable
                                ? "Already Booked"
                                : "Available"}

                            </div>

                          </div>


                          {/* ======================================
                              ROOM INFORMATION
                          ====================================== */}

                          <div className="room-info">


                            <h2>
                              {room.title}
                            </h2>


                            <p className="room-description">
                              {room.desc}
                            </p>


                            {/* ==================================
                                ROOM META
                            ================================== */}

                            <div className="room-meta">

                              <span>
                                🕙 {room.time}
                              </span>


                              <span>
                                💰 {room.price}
                              </span>

                            </div>


                            {/* ==================================
                                VIEW DETAILS
                            ================================== */}

                            {!isUnavailable && (

                              <button
                                type="button"
                                className="view-room-btn"
                                onClick={(event) => {

                                  event.stopPropagation();

                                  handleViewDetails(room);

                                }}
                              >

                                View Room Details

                              </button>

                            )}


                            {/* ==================================
                                BOOKED MESSAGE
                            ================================== */}

                            {isUnavailable && (

                              <div className="booked-message">

                                This room is already booked.

                              </div>

                            )}

                          </div>

                        </article>

                      );

                    })}

                  </div>

                )}

              </div>


              {/* =================================================
                  SERVICES
              ================================================= */}

              <section className="services-section">


                <div className="services-heading">

                  <span className="home-section-label">
                    EXPERIENCES
                  </span>


                  <h2>
                    Our Services
                  </h2>


                  <p>
                    Make your stay at Brezora
                    even more memorable.
                  </p>

                </div>


                <div className="services-grid">

                  {services.map(
                    (service, index) => (

                      <article
                        className="service-card"
                        key={index}
                      >


                        {/* SERVICE IMAGE */}

                        <div className="service-image">

                          <img
                            src={service.img}
                            alt={service.title}
                            draggable="false"
                          />

                        </div>


                        {/* SERVICE INFORMATION */}

                        <div className="service-info">

                          <h3>
                            {service.title}
                          </h3>


                          <p>
                            {service.desc}
                          </p>


                          <div className="service-bottom">

                            <strong>
                              {service.price}
                            </strong>


                            <a
                              href={`https://wa.me/918124582703?text=Hello%20Brezora,%20I%20am%20interested%20in%20${encodeURIComponent(
                                service.text
                              )}.`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="service-whatsapp"
                              onClick={(event) =>
                                event.stopPropagation()
                              }
                            >

                              WhatsApp

                            </a>

                          </div>

                        </div>

                      </article>

                    )
                  )}

                </div>

              </section>


              {/* =================================================
                  VIDEO
              ================================================= */}

              <section className="home-video-section">

                <Vedio />

              </section>

            </>

          )}

        </div>

      </section>

    </>
  );
}


export default Home;