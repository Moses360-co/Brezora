import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import BrezoraLogo from "./BrezoraLogo.png";

import {
  FaHome,
  FaInfoCircle,
  FaConciergeBell,
  FaBars,
  FaTimes,
  FaPhoneVolume
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

function NavBar({ setPage }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = (page) => {
    if (setPage) setPage(page);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "glass" : ""}`}>

      {/* LEFT */}
      <div className="left" onClick={() => handleClick("home")}>
        <img src={BrezoraLogo} alt="logo" className="logo" />
        <h2 className="brand">BREZORA</h2>
      </div>

      {/* MENU */}
      <ul className={`menu ${open ? "open" : ""}`}>
        <li onClick={() => handleClick("home")}><FaHome /> Home</li>
        <li onClick={() => handleClick("about")}><FaInfoCircle /> About</li>
        <li onClick={() => handleClick("services")}><FaConciergeBell /> Services</li>
        <li onClick={() => handleClick("contact")}><FaPhoneVolume /> Contact</li>
      </ul>

      {/* RIGHT */}
      <div className="actions">
        <a href="https://maps.google.com" target="_blank" rel="noreferrer">
          <CiLocationOn /> <span>Location</span>
        </a>

        <a href="tel:+918124582703" className="call-btn">
          <FaPhoneVolume /> <span>Call</span>
        </a>

        <button
          className="toggle"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

    </nav>
  );
}

export default NavBar;