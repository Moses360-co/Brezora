import { useEffect, useState } from "react";

import {
  getAvailableRooms,
} from "../services/roomService";

import "./Rooms.scss";

function Rooms() {

  const [rooms, setRooms] = useState([]);

  useEffect(() => {

    const availableRooms =
      getAvailableRooms();

    setRooms(availableRooms);

  }, []);

  return (

    <section className="rooms-section">

      <div className="rooms-heading">

        <span>BREZORA</span>

        <h1>
          Available Rooms
        </h1>

        <p>
          Choose the perfect room
          for your stay.
        </p>

      </div>


      {rooms.length === 0 ? (

        <div className="no-rooms">

          <h2>
            No Rooms Available
          </h2>

          <p>
            Please check again later.
          </p>

        </div>

      ) : (

        <div className="rooms-grid">

          {rooms.map((room) => (

            <div
              className="room-card"
              key={room.id}
            >

              <div className="room-image">

                <img
                  src={room.image}
                  alt={room.name}
                />

                <span>
                  Available
                </span>

              </div>


              <div className="room-content">

                <small>
                  Room {room.roomNumber}
                </small>

                <h2>
                  {room.name}
                </h2>

                <p>
                  {room.description}
                </p>


                <div className="room-facilities">

                  {room.facilities.map(
                    (facility, index) => (

                      <span key={index}>
                        {facility}
                      </span>

                    )
                  )}

                </div>


                <div className="room-footer">

                  <div>

                    <strong>
                      ₹{room.price}
                    </strong>

                    <small>
                      / night
                    </small>

                  </div>

                  <button>
                    Book Now
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </section>
  );
}

export default Rooms;