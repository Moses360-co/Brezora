
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getRooms,
  saveRooms,
} from "../services/roomService";

import "./AdminDashboard.scss";


function AdminDashboard() {
  const navigate = useNavigate();

  const [rooms, setRooms] = useState([]);


  // ========================================
  // LOAD ROOMS
  // ========================================

  useEffect(() => {
    const storedRooms = getRooms();

    setRooms(storedRooms);
  }, []);


  // ========================================
  // TOGGLE ROOM AVAILABILITY
  // ========================================

  const toggleAvailability = (roomId) => {
    const updatedRooms = rooms.map((room) => {
      if (room.id === roomId) {
        return {
          ...room,
          available: !room.available,
        };
      }

      return room;
    });

    setRooms(updatedRooms);

    // Save changes
    saveRooms(updatedRooms);
  };


  // ========================================
  // LOGOUT
  // ========================================

  const logout = () => {
    localStorage.removeItem("brezora_admin");

    navigate("/admin");
  };


  // ========================================
  // ROOM STATISTICS
  // ========================================

  const availableRooms = rooms.filter(
    (room) => room.available === true
  ).length;


  const unavailableRooms = rooms.filter(
    (room) => room.available === false
  ).length;


  // ========================================
  // JSX
  // ========================================

  return (
    <div className="admin-dashboard">


      {/* ========================================
          HEADER
      ======================================== */}

      <header className="admin-dashboard-header">

        <div>
          <h1>Brezora Admin</h1>

          <p>
            Room Management Dashboard
          </p>
        </div>


        <button
          className="admin-logout"
          onClick={logout}
        >
          Logout
        </button>

      </header>



      {/* ========================================
          STATISTICS
      ======================================== */}

      <section className="admin-statistics">


        {/* TOTAL */}

        <div className="admin-stat-card">

          <span>
            Total Rooms
          </span>

          <strong>
            {rooms.length}
          </strong>

        </div>



        {/* AVAILABLE */}

        <div className="admin-stat-card available">

          <span>
            Available Rooms
          </span>

          <strong>
            {availableRooms}
          </strong>

        </div>



        {/* UNAVAILABLE */}

        <div className="admin-stat-card unavailable">

          <span>
            Unavailable Rooms
          </span>

          <strong>
            {unavailableRooms}
          </strong>

        </div>

      </section>



      {/* ========================================
          ROOM MANAGEMENT
      ======================================== */}

      <section className="admin-room-section">


        <div className="admin-section-heading">

          <div>

            <h2>
              Room Management
            </h2>

            <p>
              Change room availability
              for your website.
            </p>

          </div>

        </div>



        {/* ========================================
            ROOM LIST
        ======================================== */}

        <div className="admin-room-list">

          {rooms.length === 0 ? (

            <div className="no-admin-rooms">

              <h3>
                No rooms found
              </h3>

              <p>
                No rooms are currently
                available to manage.
              </p>

            </div>

          ) : (

            rooms.map((room) => (

              <div
                className={`admin-room-card ${
                  room.available === false
                    ? "admin-room-unavailable"
                    : ""
                }`}
                key={room.id}
              >


                {/* ========================================
                    ROOM INFORMATION
                ======================================== */}

                <div className="admin-room-info">


                  {/* ROOM NUMBER */}

                  <div className="admin-room-number">

                    <span>
                      Room
                    </span>

                    <strong>
                      {room.id}
                    </strong>

                  </div>



                  {/* ROOM DETAILS */}

                  <div>

                    <h3>
                      {room.title}
                    </h3>

                    <p>
                      {room.price}
                    </p>

                  </div>

                </div>



                {/* ========================================
                    ROOM ACTION
                ======================================== */}

                <div className="admin-room-action">


                  {/* STATUS */}

                  <span
                    className={
                      room.available
                        ? "room-status available-status"
                        : "room-status unavailable-status"
                    }
                  >

                    {room.available
                      ? "● Available"
                      : "● Unavailable"}

                  </span>



                  {/* TOGGLE BUTTON */}

                  <button
                    className={
                      room.available
                        ? "availability-button disable"
                        : "availability-button enable"
                    }
                    onClick={() =>
                      toggleAvailability(room.id)
                    }
                  >

                    {room.available
                      ? "Mark Unavailable"
                      : "Make Available"}

                  </button>

                </div>

              </div>

            ))

          )}

        </div>

      </section>

    </div>
  );
}


export default AdminDashboard;

