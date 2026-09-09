import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import "./RoomDetails.scss";

function RoomDetails({
  room,
  onBack,
}) {
  // =====================================================
  // STATE
  // =====================================================

  const [currentImage, setCurrentImage] = useState(0);

  // =====================================================
  // TOUCH / SWIPE
  // =====================================================

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // =====================================================
  // ROOM IMAGES
  // =====================================================

  const images =
    Array.isArray(room?.gallery) &&
    room.gallery.length > 0
      ? room.gallery
      : room?.image
      ? [room.image]
      : [];

  // =====================================================
  // RESET IMAGE WHEN ROOM CHANGES
  // =====================================================

  useEffect(() => {
    setCurrentImage(0);
  }, [room]);

  // =====================================================
  // AUTO SLIDER
  // =====================================================

  useEffect(() => {
    if (!room || images.length <= 1) {
      return undefined;
    }

    const autoSlide = setInterval(() => {
      setCurrentImage((previous) => {
        if (previous >= images.length - 1) {
          return 0;
        }

        return previous + 1;
      });
    }, 5000);

    return () => {
      clearInterval(autoSlide);
    };
  }, [room, images.length]);

  // =====================================================
  // NEXT IMAGE
  // =====================================================

  const nextImage = () => {
    if (images.length <= 1) {
      return;
    }

    setCurrentImage((previous) => {
      if (previous >= images.length - 1) {
        return 0;
      }

      return previous + 1;
    });
  };

  // =====================================================
  // PREVIOUS IMAGE
  // =====================================================

  const previousImage = () => {
    if (images.length <= 1) {
      return;
    }

    setCurrentImage((previous) => {
      if (previous <= 0) {
        return images.length - 1;
      }

      return previous - 1;
    });
  };

  // =====================================================
  // SELECT IMAGE
  // =====================================================

  const selectImage = (index) => {
    setCurrentImage(index);
  };

  // =====================================================
  // TOUCH START
  // =====================================================

  const handleTouchStart = (event) => {
    touchStartX.current =
      event.touches[0].clientX;

    touchEndX.current = null;
  };

  // =====================================================
  // TOUCH MOVE
  // =====================================================

  const handleTouchMove = (event) => {
    touchEndX.current =
      event.touches[0].clientX;
  };

  // =====================================================
  // TOUCH END
  // =====================================================

  const handleTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchEndX.current === null
    ) {
      return;
    }

    const distance =
      touchStartX.current -
      touchEndX.current;

    const minimumSwipeDistance = 50;

    if (distance > minimumSwipeDistance) {
      nextImage();
    }

    if (distance < -minimumSwipeDistance) {
      previousImage();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // =====================================================
  // WHATSAPP
  // =====================================================

  const whatsappMessage =
    `Hello Brezora, I am interested in ${room?.title}. ` +
    `Please provide more details.`;

  const whatsappUrl =
    `https://wa.me/916383254176?text=` +
    encodeURIComponent(whatsappMessage);

  // =====================================================
  // AVAILABILITY
  // =====================================================

  const isUnavailable =
    room?.available === false;

  // =====================================================
  // ROOM NOT FOUND
  // =====================================================

  if (!room) {
    return (
      <section className="room-details">
        <div className="room-details-empty">

          <div className="empty-icon">
            🏡
          </div>

          <h2>
            Room Not Found
          </h2>

          <p>
            The room you are looking for
            is not available.
          </p>

          <button
            type="button"
            onClick={onBack}
          >
            <span>←</span>
            Back to Rooms
          </button>

        </div>
      </section>
    );
  }

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <section className="room-details">

      <div className="room-details-overlay">

        {/* =================================================
            BACK TO ROOMS
        ================================================= */}

        <button
          type="button"
          className="back-room-btn"
          onClick={onBack}
        >
          <span className="back-arrow">
            ←
          </span>

          <span>
            Back to Home 
          </span>
        </button>

        {/* =================================================
            MAIN CONTAINER
        ================================================= */}

        <div className="room-details-container">

          {/* =================================================
              GALLERY
          ================================================= */}

          <div className="room-gallery glass-card">

            {images.length > 0 ? (
              <>

                {/* =================================================
                    MAIN IMAGE
                ================================================= */}

                <div
                  className="main-room-image"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >

                  {/* =================================================
                      IMAGE SLIDES
                  ================================================= */}

                  <div className="room-image-slider">

                    {images.map(
                      (image, index) => (
                        <img
                          key={`${room.id}-${index}`}
                          className={
                            index === currentImage
                              ? "room-slide active"
                              : "room-slide"
                          }
                          src={image}
                          alt={`${room.title} ${index + 1}`}
                          draggable="false"
                        />
                      )
                    )}

                  </div>

                  {/* =================================================
                      IMAGE OVERLAY
                  ================================================= */}

                  <div className="image-overlay" />

                  {/* =================================================
                      STATUS
                  ================================================= */}

                  <div
                    className={`room-status ${
                      isUnavailable
                        ? "unavailable"
                        : "available"
                    }`}
                  >
                    <span className="status-dot" />

                    {isUnavailable
                      ? "Already Booked"
                      : "Available"}
                  </div>

                  {/* =================================================
                      PREVIOUS
                  ================================================= */}

                  {images.length > 1 && (
                    <button
                      type="button"
                      className="slider-btn slider-prev"
                      onClick={previousImage}
                      aria-label="Previous image"
                    >
                      <span>‹</span>
                    </button>
                  )}

                  {/* =================================================
                      NEXT
                  ================================================= */}

                  {images.length > 1 && (
                    <button
                      type="button"
                      className="slider-btn slider-next"
                      onClick={nextImage}
                      aria-label="Next image"
                    >
                      <span>›</span>
                    </button>
                  )}

                  {/* =================================================
                      COUNTER
                  ================================================= */}

                  {images.length > 1 && (
                    <div className="image-counter">
                      <strong>
                        {currentImage + 1}
                      </strong>

                      <span>/</span>

                      <span>
                        {images.length}
                      </span>
                    </div>
                  )}

                  {/* =================================================
                      SLIDER DOTS
                  ================================================= */}

                  {images.length > 1 && (
                    <div className="slider-dots">

                      {images.map(
                        (_, index) => (
                          <button
                            type="button"
                            key={index}
                            className={
                              currentImage === index
                                ? "slider-dot active"
                                : "slider-dot"
                            }
                            onClick={() =>
                              selectImage(index)
                            }
                            aria-label={`Go to image ${
                              index + 1
                            }`}
                          />
                        )
                      )}

                    </div>
                  )}

                </div>

                {/* =================================================
                    THUMBNAILS
                ================================================= */}

                {images.length > 1 && (
                  <div className="room-thumbnails">

                    {images.map(
                      (image, index) => (
                        <button
                          type="button"
                          key={`${room.id}-thumb-${index}`}
                          className={`thumbnail ${
                            currentImage === index
                              ? "active"
                              : ""
                          }`}
                          onClick={() =>
                            selectImage(index)
                          }
                          aria-label={`View image ${
                            index + 1
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${room.title} thumbnail ${
                              index + 1
                            }`}
                            draggable="false"
                          />
                        </button>
                      )
                    )}

                  </div>
                )}

              </>
            ) : (

              /* =================================================
                  NO IMAGE
              ================================================= */

              <div className="no-room-image">

                <div className="no-image-icon">
                  🏡
                </div>

                <h3>
                  Brezora
                </h3>

                <p>
                  No images available
                </p>

              </div>
            )}

          </div>

          {/* =================================================
              ROOM INFORMATION
          ================================================= */}

          <div className="room-details-info glass-card">

            <span className="room-property">
              BREZORA COTTAGE
            </span>

            <h1>
              {room.title}
            </h1>

            <div
              className={`details-status ${
                isUnavailable
                  ? "unavailable"
                  : "available"
              }`}
            >
              <span className="status-dot" />

              {isUnavailable
                ? "Already Booked"
                : "Available"}
            </div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <div className="room-description">

              <h3>
                About This Room
              </h3>

              <p>
                {room.desc ||
                  "Enjoy a comfortable and memorable stay at Brezora Cottage."}
              </p>

            </div>

            {/* =================================================
                INFORMATION
            ================================================= */}

            <div className="room-info-grid">

              <div className="info-box">

                <div className="info-icon">
                  ₹
                </div>

                <div className="info-content">

                  <small>
                    Price
                  </small>

                  <strong>
                    {room.price}
                  </strong>

                </div>

              </div>

              <div className="info-box">

                <div className="info-icon">
                  ⌚
                </div>

                <div className="info-content">

                  <small>
                    Check-out
                  </small>

                  <strong>
                    {room.time || "10:00 AM"}
                  </strong>

                </div>

              </div>

              <div className="info-box">

                <div className="info-icon">
                  ⌂
                </div>

                <div className="info-content">

                  <small>
                    Property
                  </small>

                  <strong>
                    Brezora
                  </strong>

                </div>

              </div>

            </div>

            {/* =================================================
                BOOKED MESSAGE
            ================================================= */}

            {isUnavailable && (
              <div className="booked-message">

                <div className="booked-icon">
                  !
                </div>

                <div>

                  <h3>
                    Room Currently Unavailable
                  </h3>

                  <p>
                    This room is already booked.
                    Please contact us to check
                    other available rooms.
                  </p>

                </div>

              </div>
            )}

            {/* =================================================
                CONTACT
            ================================================= */}

            <div className="room-contact">

              <h3>
                Interested in this room?
              </h3>

              <p>
                Contact Brezora for booking
                and availability information.
              </p>

              <div className="room-contact-buttons">

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                >
                  <span>
                    💬
                  </span>

                  WhatsApp
                </a>

                <a
                  href="tel:+916383254176"
                  className="call-btn"
                >
                  <span>
                    📞
                  </span>

                  Call Now
                </a>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default RoomDetails;