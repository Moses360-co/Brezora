import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import BrezoraLogo from "./BrezoraLogo.png";

import { FaHome, FaInfoCircle, FaConciergeBell, FaTimes, FaBars } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";

function NavBar({ setPage }) {
  const [open, setOpen] = useState(false);
  const [glass, setGlass] = useState(false);

  const handleClick = (page) => {
    setPage(page);
    setOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setGlass(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${glass ? "glass" : ""}`}>

      {/* LEFT */}
      <div className="left">
        <div className="logo">
          <img src={BrezoraLogo} alt="logo" />
        </div>

        <div className="brand">
          <h2>BREEZORA</h2>

          <p onClick={() => handleClick("services")}>
            STAY <span>/</span> FOOD <span>/</span> TRAVEL <span>/</span> JEEP RIDE
          </p>

          <div className="actions">
            <a href="https://www.google.com/maps" target="_blank" rel="noreferrer">
              <CiLocationOn /> Location
            </a>

            <a href="tel:+918124582703">
              <FaPhoneVolume /> Contact
            </a>
          </div>
        </div>
      </div>

      {/* MENU */}
      <ul className={`menu ${open ? "open" : ""}`}>
        <li onClick={() => handleClick("home")}><FaHome /> Home</li>
        <li onClick={() => handleClick("about")}><FaInfoCircle /> About</li>
        <li onClick={() => handleClick("services")}><FaConciergeBell /> Services</li>
        <li onClick={() => handleClick("contact")}><FaPhoneVolume /> Contact</li>
      </ul>

      {/* MOBILE BUTTON */}
      <button className="toggle" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </button>

    </nav>
  );
}

export default NavBar;